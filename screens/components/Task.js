import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Task = (props) => {
  
  const titlees = 'ไม่พบรูปภาพ';
  return (
    <View style={styles.Size1}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.Text2}>ถ่ายตรงข้อความได้ทั้งหมด เห็นรูปชัดเจน</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.middle}>
            <Text
              style={styles.Text3}
              onPress={() => alert('ไม่พบรูปภาพในอัลบั้ม')}>
              +
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Text style={styles.Text4}>*กดที่รูปเพื่อแก้ไข</Text>
          </View>
        </View>

        <Text
          style={{
            padding: 5,
            fontSize: 11,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 120,
            fontFamily: 'Prompt-Bold',
          }}>
          สถานะ:{titlees}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text2: {
    padding: 3,
    fontSize: 10,
    fontFamily: 'Prompt-Bold',
  },
  Text4: {
    marginLeft: 8,
    fontSize: 9,
    fontFamily: 'Prompt-Bold',
  },
  Text3: {
    color: '#9BC73C',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 50,
  },
  Size1: {
    padding: 2,
  },

  item: {
    backgroundColor: '#F1F3F4',
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderColor: '#828282',
    borderWidth: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 20,
    height: 0,
    backgroundColor: '#F1F2F3',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
    marginRight: 120,
    fontFamily: 'Prompt-Bold',
    
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  bottom: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#828282',
    borderTopWidth: 0,

    height: 140,
  },
  middle: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#9BC73C',
    height: 75,
    width: 75,
    marginTop: 7.5,
    marginLeft: 135,
    alignItems: 'center',

    borderRadius: 10,
  },
});

export default Task;
