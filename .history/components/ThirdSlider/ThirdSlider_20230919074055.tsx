import React from 'react'
import { 
    Box, 
    IconButton, 
    useBreakpointValue, 
    Center,
    HStack,
    Show,
    Hide
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

import CardSlider from './components/CardSlider'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function ThirdSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ]

  return (
    <Box>
      {/* CSS files for react-slick */}
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        background={"grey"}
        colorScheme="whatsapp"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        size="lg"
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        background={"grey"}
        colorScheme="whatsapp"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        size="lg"
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>


      {/* Slider */}
      <Slider {...settings} ref={(slider:any) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            position="relative"
          >
            <Center>
                <Show breakpoint='(max-width: 767px)'>
                    <HStack>
                        <CardSlider/>
                        <CardSlider/>
                        <CardSlider/>
                    </HStack>
                </Show>
                <Hide breakpoint='(max-width: 767px)'>
                    
                </Hide>
            </Center>
            

            </Box>
        ))}
      </Slider>
    </Box>
  )
}