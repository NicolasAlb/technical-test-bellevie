import {
  Avatar,
  Box,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { SupportWorker } from "../typings/types";

type SupportWorkerProps = {
  supportWorker: SupportWorker;
  numberOfHours: number;
  index: number;
  percentage: number;
};

const SupportWorkerComponent = ({
  supportWorker,
  numberOfHours,
  index,
  percentage,
}: SupportWorkerProps) => {
  return (
    <Grid item xs={12} sm={6} lg={3} key={index}>
      <Card>
        <Box sx={{ p: "20px" }}>
          <Grid container justifyContent="space-between">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Avatar
                alt={supportWorker.name}
                src={supportWorker.avatar}
                sx={{ width: 50, height: 50 }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ ml: "5%" }}>
                {supportWorker.name}
              </Typography>
            </Grid>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body1">
                Number of hours done / Number of contracted hours
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "85%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={percentage} />
                </Box>
                <Box sx={{ width: "15%" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${numberOfHours} / ${supportWorker.contractedHours}`}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
};

export default SupportWorkerComponent;
