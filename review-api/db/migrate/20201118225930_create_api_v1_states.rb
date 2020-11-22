class CreateApiV1States < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_states do |t|
      t.string :name
      t.string :abbreviation
      t.integer :tax_rate

      t.timestamps
    end
  end
end
