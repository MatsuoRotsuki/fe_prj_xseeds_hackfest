import React from "react";
import DetailCard from "../components/Contest/DetailCard";
import QuestionCard from "../components/Contest/QuestionCard";
import Timer from "../components/Contest/Timer";
import HomeLayout from "../components/layouts/HomeLayout";
import moment from "moment";

function Contest() {
  return (
    <HomeLayout>
      <QuestionCard
        question={{
          questionId: 1,
          type: "goi",
          testId: 1,
          answer: [
            {
              isCorrect: true,
              content: "content",
            },
            {
              isCorrect: false,
              content: "content",
            },
            {
              isCorrect: false,
              content: "content",
            },
          ],
          createDate: "",
          questionContent: "abc",
          questionImage: "ss",
        }}
      />
      <DetailCard />
      <Timer countdown={moment().add(20 * 60 * 1000)} />
    </HomeLayout>
  );
}

export default Contest;
