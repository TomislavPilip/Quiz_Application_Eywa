import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import { ThreeDots } from "react-loader-spinner";

interface Props {
  fullscreen?: boolean;
  height?: number;
}

const LoaderWrapper = styled.div`
  background-color: gray;
  height: 100%;
  width: 100%;
`;

export const Loader: FunctionComponent<Props> = ({
  fullscreen,
  height = 300,
  ...props
}) => (
  <LoaderWrapper>
    {fullscreen ? (
      <ThreeDots
        color="white"
        height={80}
        width={80}
        wrapperStyle={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ) : (
      <ThreeDots
        color="#white"
        height={80}
        width={80}
        wrapperStyle={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    )}
  </LoaderWrapper>
);
