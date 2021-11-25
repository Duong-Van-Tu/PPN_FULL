import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CustomerContext } from "../../contexts/CustomerContext";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ModalDestroyCustomer = () => {
  const {
    customerState: { customer, customers },
    showDestroyCustomerModal,
    setShowDestroyCustomerModal,
    destroyCustomer,
  } = useContext(CustomerContext);

  const history = useHistory();
  const handleClose = () => {
    setShowDestroyCustomerModal(false);
  };

  const query = useQuery();
  const page = Number(query.get("page")) || 1;
  const handleDeleteCustomer = () => {
    destroyCustomer(customer._id);
    setShowDestroyCustomerModal(false);
    if (customers.length === 1) {
      if (page !== 1) {
        history.push(`/recycle?page=${page - 1}`);
      } else {
        history.push(`/recycle?page=2`);
      }
    }
  };

  return (
    <Modal show={showDestroyCustomerModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Xóa khách hàng <span>{customer.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Xóa vĩnh viễn không thể khôi phục. Bạn chắc chắn chứ?</Modal.Body>
      <Modal.Footer>
        <Button className="btn" variant="secondary" onClick={handleClose}>
          Thoát
        </Button>
        <Button variant="danger" onClick={handleDeleteCustomer}>
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDestroyCustomer;
