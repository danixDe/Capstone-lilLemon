import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Annie"
          testimonial="I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images.unsplash.com/photo-1502767089025-6572583495b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Berthold"
          testimonial="I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!"
        />
        <CustomersSayCard
          rating={3}
          customerImg="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          customerName="Mars"
          testimonial="I have been to many restaurants, but this one certainly stood out!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          customerName="Rachael"
          testimonial="The restaurant has a great variety of dishes and all the ones I tried were excellent. I will definitely recommend it to my friends."
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;