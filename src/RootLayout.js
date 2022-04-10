// Import React Modules
import React, { Fragment } from "react";

import { connect } from "react-redux";
import { addPlayer } from "./reduxStates/playerState/playerActions";

const RootLayout = ({ player, addPlayer }) => {
  React.useEffect(() => {
    addPlayer({
      id: "v1.0",
      name: "Player 1",
      token: "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (player["v1.0"]) {
      console.log(player["v1.0"]);
    }
  }, [player]);

  return <Fragment></Fragment>;
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps, { addPlayer })(RootLayout);
