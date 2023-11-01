"use client";
import SelHeader from "@/components/SelHeader";
import placeholder from "@/images/placeholder.png";
import background from "@/images/arzt.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Card, CardHeader, CardBody, useDisclosure } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import RezeptForm from "@/components/rezeptForm";
import Accordiont from "@/components/accordion";
import Left from "@/components/left";
import Right from "@/components/right";

export default function page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <SelHeader />
      <section className="con-wrap">
        <div className="hero-section">
          <Image src={background} alt="alt"></Image>
          <h2>Dienstleistungen</h2>
          <nav>
            <Link href={"/"}>Geburtshilfe</Link>
            <Link href={"/"}>Gynäkologie</Link>
            <Link href={"/"}>operative Therapie</Link>
          </nav>
        </div>
        <Accordiont />
        <section className="rezeptForm">
          <RezeptForm></RezeptForm>
          <RezeptForm></RezeptForm>
        </section>
        <section id="about" className="about-us">
          <h2>Über uns</h2>
          <nav>
            <Link href={"/"}>Ärzte</Link>
            <Link href={"/"}>Team</Link>
            <Link href={"/"}>Praxis</Link>
          </nav>
          <section className="about-doc">
            <h3>Die Ärzte</h3>
            <div className="doc-con-sec">
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={placeholder}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Arzt</p>
                  <small className="text-default-500">heilt Menschen gut</small>
                  <h4 className="font-bold text-large">Lebenslauf</h4>
                </CardHeader>
              </Card>
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={placeholder}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Arzt</p>
                  <small className="text-default-500">heilt Menschen gut</small>
                  <h4 className="font-bold text-large">Lebenslauf</h4>
                </CardHeader>
              </Card>
              <Card className="doc-con py-4">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={placeholder}
                    width={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Arzt</p>
                  <small className="text-default-500">heilt Menschen gut</small>
                  <h4 className="font-bold text-large">Lebenslauf</h4>
                </CardHeader>
              </Card>
            </div>
          </section>
          <section className="about-team">
            <h3>Team</h3>
            <div className="about-team__content">
              <div>
                <Tooltip
                  content="Klicken um den Lebenslauf zu sehen"
                  className="capitalize"
                >
                  <Image
                    onClick={onOpen}
                    src={placeholder}
                    alt="placeholder"
                  ></Image>
                </Tooltip>
              </div>
              <div className="team-con-sec">
                <div className="team-con">
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                </div>
                <div className="team-con">
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                </div>
                <div className="team-con">
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                  <Tooltip
                    content="Klicken um den Lebenslauf zu sehen"
                    className="capitalize"
                  >
                    <Image
                      onClick={onOpen}
                      src={placeholder}
                      alt="placeholder"
                    ></Image>
                  </Tooltip>
                </div>
              </div>
            </div>
          </section>
          <section className="praxis-sec">
            <h3>Praxis</h3>
            <div className="praxis-gallery">
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
              <div>
                <Image src={placeholder} alt="alt"></Image>
              </div>
            </div>
          </section>
        </section>
        <section id="anfahrt" className="anfahrt">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d82180.30763880572!2d8.299077666733885!3d49.93381535964282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x47bd999841de3037%3A0xca7b5b9cb9a90cc!2sTreburer%20Str.%2021%2C%2065474%20Bischofsheim!3m2!1d49.9842601!2d8.354155!5e0!3m2!1sde!2sde!4v1698830528713!5m2!1sde!2sde"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum
            distinctio modi dolore omnis! Praesentium, autem? Natus fuga,
            consectetur rem voluptas earum omnis ducimus dignissimos similique
            dolores, voluptatem minima unde corporis maiores quos consequuntur
            sapiente dolorum maxime molestiae fugiat hic? Culpa dolor voluptates
            iure at! Dicta eos excepturi ullam iure.
          </p>
        </section>
        <Footer />
        <Modal
          backdrop="blur"
          size="2xl"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody className="modalcontent">
                  <h1>Hier ist dann Ein Lebenslauf oder sowas</h1>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </>
  );
}
