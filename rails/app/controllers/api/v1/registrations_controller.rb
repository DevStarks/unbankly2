module Api
  module V1
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      def create
        debugger
        super
      end
      # skip_before_action :verify_authenticity_token
      # wrap_parameters User, include: [:name, :email, :password, :password_confirmation]
      #
      # private
      #
      # def sign_up_params
      #   params.require(:user).permit(:name, :email, :password, :password_confirmation)
      # end
      #
      # def account_update_params
      #   params.require(:user).permit(:name, :email)
      # end
    end
  end
end
