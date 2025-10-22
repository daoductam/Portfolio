import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Image,
  Indicator,
  Modal,
  ScrollArea,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconAdjustments,
  IconArrowBigDown,
  IconArrowBigDownLineFilled,
  IconArrowBigDownLines,
} from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      className="font-mono"
      centered
      size="auto"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-b-0 !border-2 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl  text-white flex gap-3 items-center !font-bold"
          >
            Resume
            <Tooltip
              label="Download"
              className="text-bgColor"
              color="#64FFDA"
              position="right"
              offset={5}
            >
              <ActionIcon
                className="!text-primaryColor"
                component="a"
                href="/cv.pdf"
                download={Info.name}
                variant="outline"
                color="#64FFDA"
              >
                <IconArrowBigDownLineFilled />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-t-0 !border-2 !rounded-bl-3xl !rounded-br-3xl">
          <Document file="/cv.pdf">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
export default ResumeViewer;
