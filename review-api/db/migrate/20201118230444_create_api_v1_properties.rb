class CreateApiV1Properties < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_properties do |t|
      t.string :address
      t.integer :rent
      t.string :photo
      t.boolean :paid
      t.integer :expenses
      t.integer :state_id

      t.timestamps
    end
  end
end
