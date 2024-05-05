import {
  Box,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import useSpeechRecognition from "../../hooks/useSpeechRecognition";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

const Main = () => {
  const { text, startListening, isListening, hasRecognitionSupport } =
    useSpeechRecognition();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card
          sx={{
            width: "100%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            borderRadius: "16px",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#ffffff",
          }}
        >
          <CardContent sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Reconocimiento de Voz
            </Typography>
            {hasRecognitionSupport ? (
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body1">
                  {isListening
                    ? "Escuchando... Por favor, habla ahora:"
                    : "Haz clic en el micrófono para empezar a escuchar:"}
                </Typography>
                <CardActions sx={{ justifyContent: "center", p: 2 }}>
                  <IconButton
                    color={isListening ? "secondary" : "primary"}
                    onClick={startListening}
                    size="large"
                  >
                    {isListening ? (
                      <MicOffIcon fontSize="large" />
                    ) : (
                      <MicIcon fontSize="large" />
                    )}
                  </IconButton>
                </CardActions>
                {isListening && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress color="secondary" />
                    <Typography variant="caption" sx={{ mt: 2 }}>
                      Procesando tu voz...
                    </Typography>
                  </Box>
                )}
                {text && (
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      mt: 2,
                      bgcolor: "#e0f7fa",
                      p: 2,
                      borderRadius: "4px",
                    }}
                  >
                    {text}
                  </Typography>
                )}
              </Box>
            ) : (
              <Typography
                variant="h6"
                color="error"
                sx={{ mt: 2, textAlign: "center" }}
              >
                Tu navegador no soporta el reconocimiento de voz.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Main;
