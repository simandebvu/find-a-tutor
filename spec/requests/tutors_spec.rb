require 'rails_helper'

describe 'Tutors', type: :request do
  let!(:tutors) { create_list(:tutor, 10) }
  let(:tutor_id) { tutors.last.id }

  describe 'GET /api/v1/show/:id' do
    before { get "/api/v1/show/#{tutor_id}" }

    context 'when tutor exists' do
      it 'returns the tutor' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(tutor_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end
  context 'when tutor does not exist' do
    let(:tutor_id) { 9 }
    it 'returns nil' do
      expect(response).to eq(nil)
    end
  end
  describe 'POST /api/v1/tutors' do
    let!(:valid_attributes) do
      {
        name: 'Bender Vs Fry',
        description: 'bender@bendergr8.com',
        image: 'justastring',
        links: 'im a link so what ?'
      }
    end

    context 'when the request is valid' do
      before { post '/api/v1/tutors/create', params: valid_attributes }

      it 'returns status code 200 when request is accepted' do
        expect(response).not_to have_http_status(400)
      end
    end

    context 'when the request is invalid' do
      before do
        post '/api/v1/tutors/create', params:
        { name: ' ' }
      end

      it 'redirects the user' do
        expect(response.body).to include('redirected')
      end
    end
  end
end
