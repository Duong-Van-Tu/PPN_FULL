import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CustomerContext } from "../../contexts/CustomerContext";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ModalDeleteCustomer = () => {
  const {
    customerState: { customer, customers },
    showDeleteCustomerModal,
    setShowDeleteCustomerModal,
    deleteCustomer,
  } = useContext(CustomerContext);

  const history = useHistory();
  const handleClose = () => {
    setShowDeleteCustomerModal(false);
  };

  const query = useQuery();
  const page = Number(query.get("page")) || 1;
  const handleDeleteCustomer = () => {
    deleteCustomer(customer._id);
    setShowDeleteCustomerModal(false);
    if (customers.length === 1) {
      if (page !== 1) {
        history.push(`/customer?page=${page - 1}`);
      } else {
        history.push(`/customer?page=2`);
      }
    }
  };

  return (
    <Modal show={showDeleteCustomerModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Xóa khách hàng <span>{customer.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn chắc chắn chứ?</Modal.Body>
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

export default ModalDeleteCustomer;
