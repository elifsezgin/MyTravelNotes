class Api::NotesController < ApplicationController
  def create
    @note = Note.new(note_params)
    if @note.save
      render 'api/notes/show.json.jbuilder'
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.user_id == current_user.id
      if @note.update(note_params)
        render 'api/notes/show.json.jbuilder'
      else
        render json: @note.errors.full_messages, status: 422
      end
    else
      render json: ['You are not the author of the note.'], status: 422
    end
  end

  def index
    if params[:searchInput]
      @notes = Note.all.where('LOWER(description) ~ LOWER(?) AND LOWER(place_name) ~ LOWER(?)', params[:searchInput])
    else
      @notes = Note.all
    end
    render 'api/notes/index.json.jbuilder'
  end

  def show
    @note = Note.find(params[:id])
    render 'api/notes/show.json.jbuilder'
  end

  def destroy
    @note = Note.find(params[:id])
    @note.delete
    render 'api/notes/index.json.jbuilder'
  end

  private
  def note_params
    params.require(:note).permit(:id, :place_name, :address, :lat, :lng, :description, :is_private, :rating, :user_id, :date)
  end
end
