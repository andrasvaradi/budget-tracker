import {
  Text,
  Flex,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormControl,
} from '@chakra-ui/react';

export const SliderField = ({ field, setFieldChange, maxAmount }) => {

  function handleChange(val) {
    const fieldName = field.name;
    setFieldChange({ val, fieldName });
  }

  return (
    <Flex bg={'gray.200'} justifyContent="space-between" w="100%" >
      <Text w="50%" fontWeight="bold" textColor="custom.boxtop" textAlign="start">{field.name}:</Text>
      <FormControl>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={field.amount}
          min={0}
          max={5000}
          onChange={(val) => handleChange(val)}
          step={10}
          w="55%"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb>
            <Flex>
              <Text marginTop={-6} fontSize="sm">{field.amount}</Text>
              <Box boxSize="10px" />
            </Flex>
          </SliderThumb>
        </Slider>
      </FormControl>
    </Flex>
  )
};
