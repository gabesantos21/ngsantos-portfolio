import { Flex, Progress, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import ColorSchemeToggle from '../service/colorToggle';

export default function InitialTransition() {
  return (
    <Flex justifyContent={'center'} alignContent={'center'}>
      <motion.div
        animate="animate"
        variants={{
          animate: {
            height: 0,
            opacity: 0,
            zIndex: -99,
            transition: {
              when: 'afterChildren',
              duration: 1,
              delay: 1.5,
              ease: [0.87, 0, 0.13, 1],
            },
          },
        }}
        style={{
          zIndex: 50,
          width: '100%',
          background: ColorSchemeToggle(),
        }}
      >
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Text fontSize={90} fontWeight="700" data-value="About me;" px={5}>
            <motion.div
              animate="animate"
              variants={{
                animate: {
                  zIndex: -99,
                  transition: {
                    duration: 1.5,
                    ease: [0.87, 0, 0.13, 1],
                  },
                },
              }}
              style={{
                zIndex: 50,
                width: '100%',
                background: ColorSchemeToggle(),
              }}
            >
              <Flex
                justifyContent={'center'}
                alignItems={'center'}
                minH={'100vh'}
              >
                <Text
                  fontSize={90}
                  fontWeight="400"
                  px={5}
                  style={{
                    color: ColorSchemeToggle('inverse'),
                  }}
                >
                  ngsantos | portfolio
                </Text>
              </Flex>
            </motion.div>
          </Text>
        </Flex>
      </motion.div>
    </Flex>
  );
}
