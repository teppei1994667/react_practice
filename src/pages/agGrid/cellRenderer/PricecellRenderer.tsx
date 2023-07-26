import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export type BasicCellEditorProps = {
  value: number;
};

export const PriceCellRenderer = (props: BasicCellEditorProps) => {
  const { value, ...restProps } = props;
  const [priceValue, setPriceValue] = useState<string>(String(value));

  useEffect(() => {
    setPriceValue("¥" + priceValue);
  }, [value]);
  return <Typography variant="body2">{priceValue}</Typography>;
};
