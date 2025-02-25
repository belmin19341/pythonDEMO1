import {
    Button,
    Flex,
    Input,
    Field,
    Textarea,
    useDisclosure,
  } from "@chakra-ui/react";
  import { BiAddToQueue } from "react-icons/bi";
  import {
    DialogRoot,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
  } from "./ui/dialog"; // Putanja do tvog kreiranog Dialog.jsx fajla
  
  const CreateUserDialog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleAddUser = () => {
      alert("User added!");
      onClose(); // Zatvori dijalog nakon dodavanja
    };
  
    return (
      <>
        <DialogRoot isOpen={isOpen} onClose={onClose}>
          <DialogTrigger asChild>
            <Button onClick={onOpen}>
              <BiAddToQueue size={20} />
            </Button>
          </DialogTrigger>
  
          <DialogContent
            position="fixed"
            top="42%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="400px"
            bg="white"
            p={5}
            borderRadius="lg"
            boxShadow="lg"
          >
            <DialogHeader>
              <DialogTitle>MY NEW BFF</DialogTitle>
            </DialogHeader>
  
            <DialogBody>
              <Flex alignItems="center" gap={5}>
                {/* Left */}
                <Field.Root>
                  <Field.Label>Full name</Field.Label>
                  <Input placeholder="John Doe" />
                </Field.Root>
                {/* Right */}
                <Field.Root>
                  <Field.Label>Role</Field.Label>
                  <Input placeholder="SWE..." />
                </Field.Root>
              </Flex>
  
              <Field.Root mt={4}>
                <Field.Label>Description</Field.Label>
                <Textarea
                  resize="none"
                  overflowY="hidden"
                  placeholder="He is a software developer that is..."
                />
              </Field.Root>
  
              <Field.Root>
                <Field.Label>Gender</Field.Label>
                <Input placeholder="male/female" />
              </Field.Root>
            </DialogBody>
  
            {/* Footer sa dugmadima */}
            <DialogFooter display="flex" justifyContent="flex-end" gap={3} mt={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="blue" onClick={handleAddUser}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </>
    );
  };
  
  export default CreateUserDialog;
  