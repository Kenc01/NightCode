import { useTheme } from "../../providers/theme";
import { EmptyBorder } from "../border";

type Props = {
  message: string;
};

export function UserMessage({ message }: Props) {
  const { colors } = useTheme();

  return (
    <box width="100%" alignItems="center">
      <box
        justifyContent="center"
        paddingX={2}
        paddingY={1}
        backgroundColor={colors.surface}
        width="100%"
        border={["left"]}
        borderColor={colors.primary}
        customBorderChars={{
          ...EmptyBorder,
          vertical: "┃",
          topLeft: "┃",
          bottomLeft: "┃",
        }}
      >
        <text>{message}</text>
      </box>
    </box>
  );
}
