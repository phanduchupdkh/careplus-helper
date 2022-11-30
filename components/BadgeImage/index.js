import React from 'react';
import { Image, View } from 'react-native';
import { Badge } from 'react-native-paper';
import PropTypes from 'prop-types';
import { colorStyles } from '../../style';

export const BadgeImage = ({
  styleImage = {},
  size = 26,
  sizeBadge = 18,
  style = {},
  source,
  contenBadge = '',
}) => {
  return (
    <View style={{ width: size, height: size, ...style }}>
      <Image
        style={{ width: size, height: size, ...styleImage }}
        source={source}
        resizeMode="contain"
      />
      {contenBadge ? (
        <Badge
          size={sizeBadge}
          style={{
            position: 'absolute',
            right: 15,
            top: 10,
            fontSize: 10,
            backgroundColor: colorStyles?.SECONDARY_COLOR,
            color: 'white',
          }}
        >
          {contenBadge}
        </Badge>
      ) : null}
    </View>
  );
};
BadgeImage.propTypes = {
  styleImage: PropTypes.object,
  size: PropTypes.number.isRequired,
  sizeBadge: PropTypes.number,
  style: PropTypes.object,
  source: PropTypes.object,
  contenBadge: PropTypes.any,
};
