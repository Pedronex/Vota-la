import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, View } from "react-native";
import { formatDate, formatDateTime } from "../../utils";
import { ButtonCalendar } from "./styles";

// Componende de datepicker
export const Calendar = ({ onChange, editable = true, defaultValue }) => {
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(
    defaultValue
      ? new Date(
          Number.isNaN(Number(defaultValue))
            ? Date.parse(defaultValue)
            : Number(defaultValue)
        )
      : new Date(Date.now())
  );

  const onChangeData = (event, selectedDate) => {
    let currentDate;
    if (selectedDate) {
      currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      if (showTime) {
        console.log("fechar");
        setShowTime(false);
      } else {
        console.log("abrir");
        setShowTime(true);
      }
      onChange(currentDate);
    } else {
      setShow(false);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeData}
          dateFormat={"day month year"}
        />
      )}
      {showTime && (
        <DateTimePicker
          value={date}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChangeData}
          dateFormat={"day month year"}
        />
      )}
      <ButtonCalendar onPress={showPicker} disabled={!editable}>
        <Text style={editable ? null : { opacity: 0.25 }}>
          {editable && formatDateTime(date)}{" "}
          {!editable && defaultValue == null && "Data não preenchida"}
          {!editable &&
            defaultValue != null &&
            formatDateTime(
              new Date(
                Number.isNaN(Number(defaultValue))
                  ? Date.parse(defaultValue)
                  : Number(defaultValue)
              )
            )}
        </Text>
        <Feather name="calendar" size={24} />
      </ButtonCalendar>
    </View>
  );
};
