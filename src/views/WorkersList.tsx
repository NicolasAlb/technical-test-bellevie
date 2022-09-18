import { Box, Grid, Typography } from "@mui/material";
import SupportWorkerComponent from "../components/SupportWorkerComponent";
import { supportWorkers, visits } from "../data/data";

const WorkersList = () => {
  return (
    <Box sx={{ my: "5%", mx: "2%" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 2 }}
      >
        Support workers list
      </Typography>
      <Grid container spacing={5} justifyContent="space-around">
        {supportWorkers.map((supportWorker, index) => {
          const supportWorkerVisits = visits.filter(
            (visit) => visit.supportWorkerId === supportWorker.supportWorkerId
          );
          let numberOfHours = 0;
          supportWorkerVisits.forEach((visit) => {
            const numberOfHour =
              (visit.endDateTime - visit.startDateTime) / 1000 / 60 / 60;
            numberOfHours += numberOfHour;
          });
          const percentage =
            (numberOfHours / supportWorker.contractedHours) * 100;
          return (
            <SupportWorkerComponent
              supportWorker={supportWorker}
              index={index}
              numberOfHours={numberOfHours}
              percentage={percentage}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default WorkersList;
