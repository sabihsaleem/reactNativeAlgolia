import React from 'react';
import { Text } from 'react-native';
import { connectHighlight } from 'react-instantsearch-native';

export default connectHighlight(
  ({ highlight, attribute, hit, highlightProperty, inverted }) => {
    const parsedHit = highlight({ attribute, hit, highlightProperty });
    const styles = inverted ? {} : { backgroundColor: 'white' };
    const highligtedHit = parsedHit.map((part, idx) => {
      if (part.isHighlighted)
        return (
          <Text key={idx} style={styles}>
            {part.value}
          </Text>
        );
      return (
        <Text key={idx} style={{ fontWeight: inverted ? 'bold' : 'normal' }}>
          {part.value}
        </Text>
      );
    });
    return <Text>{highligtedHit}</Text>;
  }
);