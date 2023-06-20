import { useState } from "react";
import React from "react";
import TableModel from "../tableModel/TableModel";
import { Dealers } from "../../json/driver.json";
import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormLabel,
  Select,
  Input,
  FormControl,
  Textarea,
} from "@chakra-ui/react";
const DealersModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const data = React.useMemo(() => Dealers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Car ID",
        accessor: "DealerID",
      },
      {
        Header: "Price",
        accessor: "DealerName",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Status",
        accessor: "PhoneNo",
      },
      {
        Header: "Car Details",
        accessor: "TotalCars",
      },
      {
        Header: "Edit",
        accessor: "AcceptRejected",
        Cell: ({ value }) => (
          <>
            {/* Edit Button */}
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={handleEditClick}
              leftIcon={<EditIcon />}
              // style={{ backgroundColor: "#5DC302" }}
            >
              Edit
            </Button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input type="text" placeholder="Enter price" />

                    <FormLabel>Location</FormLabel>
                    <Input type="text" placeholder="Enter location" />

                    <FormLabel>Status</FormLabel>
                    <Select placeholder="Select status">
                      <option value="open">Open</option>
                      <option value="close">Close</option>
                    </Select>

                    <FormLabel>Car Details</FormLabel>
                    <Textarea placeholder="Enter car details" />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
                    Save
                  </Button>
                  <Button variant="ghost" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ),
      },
    ],
    [isModalOpen]
  );

  return (
    <>
      <TableModel data={data} columns={columns} />
    </>
  );
};

export default DealersModel;
