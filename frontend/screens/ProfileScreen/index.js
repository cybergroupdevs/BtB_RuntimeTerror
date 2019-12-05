import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
// import DocumentPicker from "react-native-document-picker";
import styles from "./style";

class ProfileScreen extends React.Component {
  state = {
    userType: "NGO",
    isVerified: false,
    isPersonalDetailEdit: false,
    isAddressDeyalsEdit: false,
    isEditButtonPersonlHide: false,
    isEditButtonAddressHide: false,
    personalDetailsUser: {
      FullName: "",
      Gender: "",
      D_O_B: "",
      Phone: ""
    },
    personalDetailNGO: {
      AuthorityName: "",
      Phone1: "",
      Phone2: "",
      Phone3: ""
    },
    Email_ID: "",
    AddressDetails: {
      houseNo_BuildingName: "",
      FullAddress: "",
      city: "",
      pincode: ""
    }
  };

  static navigationOptions = {
    title: 'Profile'
  }

  componentDidMount = () => {
    this.setState({
      Email_ID: "keshavbansal19960506@gmail.com",
      personalDetailsUser: {
        FullName: "Deepak kumar bansal",
        Gender: "Male",
        D_O_B: "21 December 2019",
        Phone: "9634349532"
      },
      personalDetailNGO: {
        AuthorityName: "Cyber Group India Private Limited",
        Phone1: "9634349532",
        Phone2: "9634349532",
        Phone3: "9634349532"
      },
      AddressDetails: {
        houseNo_BuildingName: "B-9, Pinnacle Buisness Park",
        FullAddress:
          "2nd Floor, Pinnacle Park / Block B, Sector 3/ Noida, Uttar Pradesh / India",
        city: "VishakaPatnam",
        pincode: "250002"
      }
    });
  };

  // async selectFile() {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles]
  //     });
  //     console.log("res : " + JSON.stringify(res));
  //     console.log("URI : " + res.uri);
  //     console.log("Type : " + res.type);
  //     console.log("File Name : " + res.name);
  //     console.log("File Size : " + res.size);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       alert("Canceled  picker");
  //     } else {
  //       alert("Unknown Error: " + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // }

  render() {
    console.log(this.state.personalDetailNGO.AuthorityName);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/AashrayLogo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.subContainer}>
          {/* Personal Details section start */}
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextStyle}>Personal Details</Text>
            {this.state.isEditButtonPersonlHide ? null : (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isPersonalDetailEdit: true,
                    isEditButtonPersonlHide: true
                  });
                }}
              >
                <View style={styles.editButtonStyle}>
                  <Text style={styles.editButtonTextStyle}>Edit</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {this.state.userType === "NGO" ? (
            <View>
              <View style={styles.content}>
                <View style={{ width: "90%" }}>
                  <Text style={styles.fieldsTextStyle}>Authority Name : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailNGO.AuthorityName}
                      style={styles.editTextInputStyle}
                      onChangeText={val =>
                        this.setState({
                          personalDetailNGO: { AuthorityName: val }
                        })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailNGO.AuthorityName}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.subContent1}>
                  <Text style={styles.fieldsTextStyle}>Phone1 : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailNGO.Phone1}
                      style={styles.editTextInputStyle}
                      keyboardType="number-pad"
                      onChangeText={val =>
                        this.setState({ personalDetailNGO: { Phone1: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailNGO.Phone1}
                    </Text>
                  )}
                </View>
                <View style={styles.subContent1}>
                  <Text style={styles.fieldsTextStyle}>Phone2 : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailNGO.Phone2}
                      style={styles.editTextInputStyle}
                      keyboardType="number-pad"
                      onChangeText={val =>
                        this.setState({ personalDetailNGO: { Phone2: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailNGO.Phone2}
                    </Text>
                  )}
                </View>
                <View style={styles.subContent2}>
                  <Text style={styles.fieldsTextStyle}>Phone3 : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailNGO.Phone3}
                      style={styles.editTextInputStyle}
                      keyboardType="number-pad"
                      onChangeText={val =>
                        this.setState({ personalDetailNGO: { Phone3: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailNGO.Phone3}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.content}>
                <View style={styles.subContent1}>
                  <Text style={styles.fieldsTextStyle}>Full Name : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailsUser.FullName}
                      style={styles.editTextInputStyle}
                      onChangeText={val =>
                        this.setState({
                          personalDetailsUser: { FullName: val }
                        })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailsUser.FullName}
                    </Text>
                  )}
                </View>
                <View style={[{ paddingRight: 31 }, styles.subContent2]}>
                  <Text style={styles.fieldsTextStyle}>Gender : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailsUser.Gender}
                      style={styles.editTextInputStyle}
                      onChangeText={val =>
                        this.setState({ personalDetailsUser: { Gender: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailsUser.Gender}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.subContent1}>
                  <Text style={styles.fieldsTextStyle}>D.O.B : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailsUser.D_O_B}
                      style={styles.editTextInputStyle}
                      onChangeText={val =>
                        this.setState({ personalDetailsUser: { D_O_B: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailsUser.D_O_B}
                    </Text>
                  )}
                </View>
                <View style={styles.subContent2}>
                  <Text style={styles.fieldsTextStyle}>Phone : </Text>
                  {this.state.isPersonalDetailEdit ? (
                    <TextInput
                      underlineColorAndroid="transparent"
                      defaultValue={this.state.personalDetailsUser.Phone}
                      style={styles.editTextInputStyle}
                      keyboardType="number-pad"
                      onChangeText={val =>
                        this.setState({ personalDetailsUser: { Phone: val } })
                      }
                    />
                  ) : (
                    <Text style={styles.fieldsTextStyle}>
                      {this.state.personalDetailsUser.Phone}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          )}

          <View style={styles.singleFiledContent}>
            <Text style={styles.fieldsTextStyle}>Email ID : </Text>
            {this.state.isPersonalDetailEdit ? (
              <TextInput
                underlineColorAndroid="transparent"
                defaultValue={this.state.Email_ID}
                style={styles.editTextInputStyle}
                keyboardType="email-address"
                onChangeText={val => this.setState({ Email_ID: val })}
              />
            ) : (
              <Text style={styles.fieldsTextStyle}>{this.state.Email_ID}</Text>
            )}
          </View>
          {this.state.isPersonalDetailEdit ? (
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isPersonalDetailEdit: false,
                    isEditButtonPersonlHide: false
                  });
                }}
              >
                <View
                  style={[
                    { backgroundColor: "red" },
                    styles.concelUpdateButton
                  ]}
                >
                  <Text style={styles.cancelUpdateButtonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={[
                    { backgroundColor: "orange" },
                    styles.concelUpdateButton
                  ]}
                >
                  <Text style={styles.cancelUpdateButtonText}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {/* Personal Details section End */}

        {/* Address Details section start */}
        <View style={styles.subContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextStyle}>Address Details</Text>
            {this.state.isEditButtonAddressHide ? null : (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isAddressDeyalsEdit: true,
                    isEditButtonAddressHide: true
                  });
                }}
              >
                <View style={styles.editButtonStyle}>
                  <Text style={styles.editButtonTextStyle}>Edit</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.singleFiledContent}>
            <Text style={styles.fieldsTextStyle}>
              House No., Building Name :{" "}
            </Text>
            {this.state.isAddressDeyalsEdit ? (
              <TextInput
                underlineColorAndroid="transparent"
                defaultValue={this.state.AddressDetails.houseNo_BuildingName}
                style={styles.editTextInputStyle}
                onChangeText={val =>
                  this.setState({
                    AddressDetails: { houseNo_BuildingName: val }
                  })
                }
              />
            ) : (
              <Text style={styles.fieldsTextStyle}>
                {this.state.AddressDetails.houseNo_BuildingName}
              </Text>
            )}
          </View>
          <View style={styles.singleFiledContent}>
            <Text style={styles.fieldsTextStyle}>Full Address : </Text>
            {this.state.isAddressDeyalsEdit ? (
              <TextInput
                underlineColorAndroid="transparent"
                defaultValue={this.state.AddressDetails.FullAddress}
                style={styles.editTextInputStyle}
                multiline={true}
                onChangeText={val =>
                  this.setState({ AddressDetails: { FullAddress: val } })
                }
              />
            ) : (
              <Text style={styles.fieldsTextStyle}>
                {this.state.AddressDetails.FullAddress}
              </Text>
            )}
          </View>
          <View style={styles.content}>
            <View style={styles.subContent1}>
              <Text style={styles.fieldsTextStyle}>City : </Text>
              {this.state.isAddressDeyalsEdit ? (
                <TextInput
                  underlineColorAndroid="transparent"
                  defaultValue={this.state.AddressDetails.city}
                  style={styles.editTextInputStyle}
                  onChangeText={val =>
                    this.setState({ AddressDetails: { city: val } })
                  }
                />
              ) : (
                <Text style={styles.fieldsTextStyle}>
                  {this.state.AddressDetails.city}
                </Text>
              )}
            </View>
            <View style={styles.subContent2}>
              <Text style={styles.fieldsTextStyle}>Pincode : </Text>
              {this.state.isAddressDeyalsEdit ? (
                <TextInput
                  underlineColorAndroid="transparent"
                  defaultValue={this.state.AddressDetails.pincode}
                  style={styles.editTextInputStyle}
                  keyboardType="number-pad"
                  onChangeText={val =>
                    this.setState({ AddressDetails: { pincode: val } })
                  }
                />
              ) : (
                <Text style={styles.fieldsTextStyle}>
                  {this.state.AddressDetails.pincode}
                </Text>
              )}
            </View>
          </View>
          {this.state.isEditButtonAddressHide ? (
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isAddressDeyalsEdit: false,
                    isEditButtonAddressHide: false
                  });
                }}
              >
                <View
                  style={[
                    { backgroundColor: "red" },
                    styles.concelUpdateButton
                  ]}
                >
                  <Text style={styles.cancelUpdateButtonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={[
                    { backgroundColor: "orange" },
                    styles.concelUpdateButton
                  ]}
                >
                  <Text style={styles.cancelUpdateButtonText}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        {/* Address Details section End */}

        {/* Verification Details section start */}
        <View style={[{ marginBottom: "5%" }, styles.subContainer]}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTextStyle}>Verification Details</Text>
          </View>
          {this.state.isVerified ? (
            <View style={styles.ifVerifiedStyle}>
              <Image
                source={require("../../assets/images/greenTik.png")}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ color: "green", fontSize: 25 }}>Verified </Text>
            </View>
          ) : (
            <View>
              <View style={({ alignItems: "center" }, [styles.content])}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.filePickerbuttonStyle}
                  // onPress={this.selectFile.bind(this)}
                >
                  {/*Single file selection button*/}
                  <Text style={styles.fieldsTextStyle}>Click here to pick</Text>
                </TouchableOpacity>
                <Text style={styles.fieldsTextStyle}>Address Proof</Text>
              </View>
              <View style={({ alignItems: "center" }, [styles.content])}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.filePickerbuttonStyle}
                  // onPress={this.selectFile.bind(this)}
                >
                  {/*Single file selection button*/}
                  <Text style={styles.fieldsTextStyle}>Click here to pick</Text>
                </TouchableOpacity>
                <Text style={styles.fieldsTextStyle}>ID Proof</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.verifyButton}>
                  <Text style={styles.verifyButtonText}>Verify</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {/* Verification Details section end */}
      </ScrollView>
    );
  }
}

export default ProfileScreen;
