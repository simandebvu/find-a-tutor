class Api::V1::TutorsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def index
    tutor = Tutor.where.not(id: current_user.favourites).order(created_at: :desc)
    render json: tutor
  end

  def favourites
    tutor = current_user.favourites
    render json: tutor
  end

  def create
    tutor = current_user.tutors.create!(tutor_params)
    if tutor
      render json: tutor
    else
      render json: tutor.errors
    end
  end

  def show
    if tutor
      render json: tutor
    else
      render json: tutor.errors
    end
  end

  def favorite
    type = params[:type]
    if type == 'favorite'
      current_user.favourites << tutor
      flash[:notice] = "You favorited #{@tutor.name}"
    elsif type == 'unfavorite'
      current_user.favourites.delete(tutor)
      flash[:notice] = "Unfavorited #{@tutor.name}"
    else
      flash[:notice] = 'Nothing happened.'
    end
    redirect_to "/tutors"
  end

  def destroy
    tutor&.destroy
    render json: { message: 'Sucessfully Removed Tutor' }
  end

  private

  def tutor_params
    params.permit(:name, :links, :description, :image)
  end

  def tutor
    @tutor ||= Tutor.find(params[:id])
  end
end
