import {StyleSheet} from 'react-native';

const primary = '#CB8B34';
const white = '#FFFFFF';

const style = StyleSheet.create({
  wFull: {
    width: '100%',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    flex: 1,
    paddingHorizontal: 16,
  },
  icon: {
    width: 280,
    height: 280,
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  textPrimary: {
    color: primary,
  },
  textWhite: {
    color: white,
  },
  text2xl: {
    fontSize: 36,
  },
  textXl: {
    fontSize: 24,
  },
  textLg: {
    fontSize: 20,
  },
  textBase: {
    fontSize: 16,
  },
  textSm: {
    fontSize: 12,
  },
  textCenter: {
    textAlign: 'center',
  },
  fontBold: {
    fontWeight: '800',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  mb72: {
    marginBottom: 72,
  },
  primaryButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    borderWidth: 2,
    borderColor:white,
    borderRadius: 68,
    backgroundColor: primary,
  },
  secondaryButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    borderRadius: 68,
    backgroundColor: white,
  },
  flexRow: {
    flexDirection: 'row',
  },
  px16: {
    paddingHorizontal: 16,
  },
});

export const {
  wFull,
  main,
  icon,
  mb8,
  mb16,
  text2xl,
  textWhite,
  textPrimary,
  fontBold,
  capitalize,
  textCenter,
  textBase,
  mb72,
  primaryButton,
  secondaryButton,
  flexRow,
  px16,
  textSm,
} = style;
