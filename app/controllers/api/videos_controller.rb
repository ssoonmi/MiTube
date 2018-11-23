class Api::VideosController < ApplicationController

  def index
    search = params[:search].downcase
    search_words = search.split(" ")
    numWords = search_words.length
    where_clause = ['lower(username) LIKE ?']
    search_words.length.times do
      where_clause.push('lower(username) LIKE ? ')
    end
    where_clause_joined = where_clause.join(' OR ')
    search_words_split = []
    orig_search_words_split = []
    search_vars = []
    order_whens = []
    order_clause = ""
    search_words_split = search_words.each do |word|
      search_words_split.push("%#{word}%")
      orig_search_words_split.push("%#{word}%")
      order_whens.push("lower(title) LIKE ?")
    end
    where_and_str = order_whens.join(" AND ")
    where_or_str = order_whens.join(" OR ")
    search_words_split = search_words_split.concat(search_words_split)
    # numWords.times do |idx|
    #   search_vars.push("%#{search_words_split.join('%')}")
    #   order_clause += "WHEN lower(title) LIKE '?' THEN #{idx + 1} "
    #   search_words_split.pop
    # end

    order_str = "CASE #{order_clause} ELSE 100 END"
    @channel = Channel
      .includes(:videos)
      .limit(1)
      .where("lower(name) = ?", search)
    @channel = nil unless @channel && !@channel.empty?
    offset = 0
    offset = Integer(params[:offset]) if params[:offset]
    limit = 100
    limit = Integer(params[:limit]) if params[:limit]
    @videos = Video
      .includes(:channel, :views)
      .limit(Integer(limit))
      .offset(offset)
      .where(where_and_str, *orig_search_words_split)
      # .order("CASE WHEN TITLE LIKE '%food%' THEN 1 WHEN NAME LIKE '%product%' THEN 2 ELSE 100 END")
    if @videos.length < limit
      @or_videos = Video
        .includes(:channel, :views)
        .limit(Integer(limit))
        .offset(offset)
        .where(where_or_str, *orig_search_words_split)
    end
    @videos = @videos + @or_videos
    render :index
    # @channel = Channel.find(params[:channel_id])
    # if @channel
    #   @videos = @channel.videos.includes(:file, :thumbnail)
    #   render :index
    # else
    #   render json: ["Channel not found"], status: 422
    # end
  end

  def show
    @video = Video.includes(:channel, :comments, :views).find(params[:id])
    if @video
      @comments = @video.comments
      @channel = @video.channel;
      render :show
    else
      render json: ["Video not found"], status: 422
    end
  end

  def create
    @channel = Channel.find(params[:channel_id])
    if @channel && current_user.id == @channel.user_id
      if (params[:video][:thumbnail] && params[:video][:file]) &&
        (params[:video][:thumbnail] != "" && params[:video][:file] != "")
        @video = @channel.videos.new(video_params)
        if @video.save
          render :show
        else
          render json: @video.errors.full_messages, status: 400
        end
      else
        render json: ["Need thumbnail and video file"], status: 422
      end
    elsif @channel
      render json: ["Can't upload to someone else's channel"], status: 422
    else
      render json: ["Can't find channel"], status: 422
    end
  end

  def destroy
    @video = Video.includes(:channel, :views).find(params[:id])
    if @video && current_user.id == @video.channel.user_id
      @video.destroy
      render json: {id: @video.id}
    else
      render json: ["Can't find video"], status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :file, :thumbnail, :url, :thumbnail_url)
  end
end
