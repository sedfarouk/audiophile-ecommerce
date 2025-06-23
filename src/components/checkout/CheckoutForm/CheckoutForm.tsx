import { Form, FormikProps } from 'formik';
import { FormField } from '../FormField/FormField';
import { RadioField } from '../RadioField/RadioField';
import { CheckoutForm as CheckoutFormType } from '../../../types/checkout.types';

interface CheckoutFormProps {
  formik: FormikProps<CheckoutFormType>;
}

export const CheckoutForm = ({ formik }: CheckoutFormProps) => {
  const { values } = formik;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg">
      <h1 className="text-h3 font-bold mb-8">CHECKOUT</h1>

      <Form>
        {/* Billing Details Section */}
        <div className="mb-8">
          <h2 className="text-audiophile-orange text-subtitle font-bold mb-4">BILLING DETAILS</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              label="Name"
              name="name"
              type="text"
              placeholder="Alexei Ward"
            />
            
            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="alexei@mail.com"
            />
            
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>

        {/* Shipping Info Section */}
        <div className="mb-8">
          <h2 className="text-audiophile-orange text-subtitle font-bold mb-4">SHIPPING INFO</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              label="Address"
              name="address"
              type="text"
              placeholder="1137 Williams Avenue"
              className="md:col-span-2"
            />
            
            <FormField
              label="ZIP Code"
              name="zipCode"
              type="text"
              placeholder="10001"
            />
            
            <FormField
              label="City"
              name="city"
              type="text"
              placeholder="New York"
            />
            
            <FormField
              label="Country"
              name="country"
              type="text"
              placeholder="United States"
            />
          </div>
        </div>

        {/* Payment Details Section */}
        <div className="mb-8">
          <h2 className="text-audiophile-orange text-subtitle font-bold mb-4">PAYMENT DETAILS</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2 mb-4">
              <label className="block text-sm font-bold mb-2">Payment Method</label>
              <div className="space-y-3">
                <RadioField
                  label="e-Money"
                  name="paymentMethod"
                  value="e-money"
                />
                
                <RadioField
                  label="Cash on Delivery"
                  name="paymentMethod"
                  value="cash"
                />
              </div>
            </div>
            
            {values.paymentMethod === 'e-money' && (
              <>
                <FormField
                  label="e-Money Number"
                  name="eMoneyNumber"
                  type="text"
                  placeholder="238521993"
                />
                
                <FormField
                  label="e-Money PIN"
                  name="eMoneyPin"
                  type="password"
                  placeholder="6891"
                />
              </>
            )}

            {values.paymentMethod === 'cash' && (
              <div className="md:col-span-2 flex items-center space-x-4 bg-audiophile-white-light p-4 rounded">
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938c0 .776.63 1.406 1.407 1.406h18.283a1.403 1.403 0 0 0 1.134-.574l2.694-3.675a1.15 1.15 0 1 1 1.848 1.37l-2.568 3.53c-.393.539-1.02.86-1.698.86H9.624a1.406 1.406 0 0 0-1.406 1.407v9.937c0 .777.63 1.407 1.406 1.407h32.97a1.406 1.406 0 0 0 1.406-1.407V9.844a1.406 1.406 0 0 0-1.406-1.406ZM32.842 14.03h-7.03a1.406 1.406 0 0 1 0-2.812h7.03a1.406 1.406 0 0 1 0 2.812Zm-7.53 20.97a3.094 3.094 0 1 1 0-6.188 3.094 3.094 0 0 1 0 6.188Zm18.75 0a3.094 3.094 0 1 1 0-6.188 3.094 3.094 0 0 1 0 6.188Z" fill="#D87D4A"/>
                </svg>
                <p className="text-gray-500 text-sm">
                  The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hidden submit button to allow form submission via the OrderSummary component */}
        <button type="submit" className="hidden" />
      </Form>
    </div>
  );
};
