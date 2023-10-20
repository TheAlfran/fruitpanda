import { View, Text } from 'react-native'
import React from 'react'

export default function ratingHook() {
    const FiveStarRating = () => {
        const maxStars = 5;
        const rating = 5;
        const starIcons = Array.from({ length: maxStars }, (_, index) => (
          <Text key={index} style={{ color: "yellow", fontSize: 20 }}>
            &#9733;
          </Text> // Wrap the star character in a Text component
        ));
    
        return (
          <>
            <Text>{starIcons}</Text>
            <Text>
              Rating: {rating} / {maxStars}
            </Text>
          </>
        );
      };
    
      const FiveStarRating1 = () => {
        const maxStars = 5;
        const rating = 5;
        const starIcons = Array.from({ length: maxStars }, (_, index) => (
          <Text key={index} style={{ color: "yellow", fontSize: 15 }}>
            &#9733;
          </Text> // Wrap the star character in a Text component
        ));
    
        return (
          <>
            <Text>{starIcons}</Text>
          </>
        );
      };


  return (
    {FiveStarRating, FiveStarRating1}
  )
}