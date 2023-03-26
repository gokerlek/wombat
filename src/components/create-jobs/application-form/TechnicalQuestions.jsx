import names from "../create-jobs-names.jsx";
import { Button, Text } from "../../index.js";

const TechnicalQuestions = () => {
  return (
    <div className="white-card">
      <Text className="title">{names.technical_questions.name}</Text>

      <Button height={52} purpose="white_dashed" leftIcon="plus">
        add new
      </Button>
    </div>
  );
};

export default TechnicalQuestions;
