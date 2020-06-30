/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : z_web

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-06-30 17:21:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for yh_data
-- ----------------------------
DROP TABLE IF EXISTS `yh_data`;
CREATE TABLE `yh_data` (
  `yhid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `yhimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`yhid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of yh_data
-- ----------------------------
INSERT INTO `yh_data` VALUES ('1', 'fkj', '123', '13712011111', '珠海', '111@qq.com', 'touxiang.png');
INSERT INTO `yh_data` VALUES ('2', 'ddd', '214', '13523465874', '上海', '223@163.com', 'touxiang.png');
INSERT INTO `yh_data` VALUES ('3', 'ccc', '333', '13511122222', '北京', '166666@qq.com', 'touxiang.png');
INSERT INTO `yh_data` VALUES ('4', 'admin', '999', '000', '广州', '777@gmail.com', 'touxiang.png');
