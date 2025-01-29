/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import { useCheckout } from './useCheckout';

// eslint-disable-next-line no-unused-vars
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckOut } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
