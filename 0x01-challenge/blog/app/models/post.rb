class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: { minimum: 5 }
  validates :body, presence: true
  attribute :online, :boolean, default: true # Add the 'online' field with a default value

  def toggle_online
    update(online: !online)
  end
end
