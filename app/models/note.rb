# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  place_name  :string           not null
#  address     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  description :text             not null
#  is_private  :boolean          not null
#  rating      :integer          not null
#  user_id     :integer          not null
#  date        :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  validates :place_name, :address, :lat, :lng, :description, :is_private, :rating, :user_id, :date, presence: true

  belongs_to :user
end
