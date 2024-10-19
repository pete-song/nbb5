"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Confetti from "react-confetti";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setConfetti(false);
    setLetter(false);
    setYesButton("No");
    setOpen(false);
  };

  const [mail, setMail] = useState(true);

  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [confetti, setConfetti] = useState(true);
  useEffect(() => {
    if (confetti) {
      const timer = setTimeout(() => {
        setConfetti(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [confetti]);

  const [yesButton, setYesButton] = useState("No");
  const handleYes = () => {
    setLetter(true);
    setConfetti(true);
  };
  const handleNo = () => {
    setYesButton("Yes");
  };

  const [letter, setLetter] = useState(false);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
      size={12}
    >
      {mail ? (
        <>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            size={12}
            spacing={2}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              size={12}
              sx={{ mb: 1 }}
            >
              <Box onClick={() => setMail(false)}>
                <Image
                  alt="Happy wife, happy life."
                  src="/nbb5/mail1.gif"
                  width={800}
                  height={500}
                />
              </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" size={12}>
              <Typography
                variant="h6"
                fontWeight={400}
                fontFamily="Dynapuff"
                color="black"
              >
                TO:
              </Typography>
              <Typography
                variant="h6"
                fontWeight={100}
                fontFamily="Dynapuff"
                color="grey"
              >
                NONG B
              </Typography>
            </Grid>
            <Grid container direction="row" justifyContent="center" size={12}>
              <Typography
                variant="h6"
                fontWeight={400}
                fontFamily="Dynapuff"
                color="black"
              >
                FROM:
              </Typography>
              <Typography
                variant="h6"
                fontWeight={100}
                fontFamily="Dynapuff"
                color="grey"
              >
                P B
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          {confetti && (
            <Confetti
              width={dimensions.width}
              height={dimensions.height}
              gravity={0.6}
            />
          )}
          {letter && (
            <Confetti
              width={dimensions.width}
              height={dimensions.height}
              gravity={0.6}
            />
          )}
          <Grid container direction="row" justifyContent="center" size={12}>
            <Typography
              variant="h1"
              fontFamily="Dynapuff"
              color="black"
              sx={{ mb: 10 }}
            >
              Happy 5 Months BB ! !
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            size={12}
          >
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="space-evenly"
              spacing={10}
            >
              <Box>
                <Image
                  alt="Happy wife, happy life."
                  src="/mimibubu.gif"
                  width={300}
                  height={200}
                />
              </Box>
              <Box>
                <Image
                  alt="Happy wife, happy life."
                  src="/amore-love-you.gif"
                  width={300}
                  height={200}
                />
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  width: 600,
                  height: 600,
                  borderRadius: 8,
                  bgcolor: "pink",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Image
                    alt="Happy wife, happy life."
                    src="/disneyland.png"
                    width={300}
                    height={400}
                  />
                </Box>
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                    fontFamily: "Dynapuff",
                  }}
                >
                  WHAT DOES THIS BUTTON DO?
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    {!letter ? (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <Image
                            alt="Happy wife, happy life."
                            src="/peach-goma (1).gif"
                            width={160}
                            height={120}
                          />
                        </Box>

                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 4, color: "black", textAlign: "center" }}
                        >
                          Do you lub me?
                        </Typography>

                        <Grid
                          container
                          size={12}
                          direction="row"
                          justifyContent="center"
                          spacing={2}
                          sx={{ mt: 2 }}
                        >
                          <Button
                            onClick={handleYes}
                            sx={{
                              backgroundColor: "lightgreen",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "green",
                              },
                            }}
                          >
                            Yes
                          </Button>

                          {yesButton === "Yes" ? (
                            <Button
                              onClick={handleYes}
                              sx={{
                                backgroundColor: "lightgreen",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "green",
                                },
                              }}
                            >
                              Yes
                            </Button>
                          ) : (
                            <Button
                              onClick={handleNo}
                              sx={{
                                backgroundColor: "lightcoral",
                                color: "white",
                                "&:hover": {
                                  backgroundColor: "red",
                                },
                              }}
                            >
                              {yesButton}
                            </Button>
                          )}
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-evenly"
                          alignItems="space-evenly"
                          spacing={10}
                          sx={{ my: 4 }}
                        >
                          <Box>
                            <Image
                              alt="Happy wife, happy life."
                              src="/disneyland2.png"
                              width={250}
                              height={333}
                            />
                          </Box>
                        </Grid>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontFamily="Mynerve"
                          sx={{ color: "black", textAlign: "center" }}
                        >
                          Dear Nong B,
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 2, color: "black", textAlign: "center" }}
                        >
                          Happy 5 Months !! I can't believe that it has been 5
                          months already ! so short but feels so long too !
                          alsdnfoajdsf I made this webpage just for bb since bb
                          is so far away i decided to create something digital
                          this time so that bb could enjoy a little surprise
                          instead. I tried to make this font match my own
                          handwriting a bit, i dunno i just found it off google
                          fonts. maybe theres a better one but i like the look
                          of this handwrity looking font !
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 2, color: "black", textAlign: "center" }}
                        >
                          Anyway, I just wanted to say how much me lub my baby
                          and how strong you are. I think bb doesn't really see
                          how strong she is but the fact that bb has made it
                          this far and that bb is still going is a very strong
                          sign that bb is strong mak mak loey !! You are a lot
                          stronger than you know, you just need to believe in it
                          more. bb make me feel very happy and very bouncy mai
                          roo boing boing boing no cap you feel me?
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 2, color: "black", textAlign: "center" }}
                        >
                          Me wish me could be with bb everyday but i think us
                          being apart is proof that our bond and connection is
                          super strong. nothing can break us if we have gone
                          this far and i think that means a lot. me wont leave
                          bb, you dont need to worry na kha!! this distance
                          can't stop us !!! 💪
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 2, color: "black", textAlign: "center" }}
                        >
                          Tokyo was super fun and i want to go back again !
                          disneyland and exploring tokyo with bb is everything
                          me could wish for. getting to experience that is a
                          blessing that me likey and cherish very much. we have
                          so much more to do and explore and i hope bb can
                          imagine the endless possibilities that we have and
                          unlimited time to do whatever we wanna do.
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          fontFamily="Mynerve"
                          sx={{ mt: 2, color: "black", textAlign: "center" }}
                        >
                          domo arigato gozaimasu for taking care of me from far
                          away. I lub bb so so muchi more than bb can imagine.
                          Happy 5 months ! - P bb.
                        </Typography>
                      </>
                    )}
                  </Box>
                </Modal>
              </Box>
            </Grid>
            <Grid
              container
              direction="column"
              justifyContent="space-evenly"
              alignItems="space-evenly"
              spacing={10}
            >
              <Box>
                <Image
                  alt="Happy wife, happy life."
                  src="/peach-goma copy.gif"
                  width={300}
                  height={300}
                />
              </Box>
              <Box>
                <Image
                  alt="Happy wife, happy life."
                  src="/thank-you.gif"
                  width={250}
                  height={200}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
