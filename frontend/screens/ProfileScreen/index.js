import React from "react";
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, AsyncStorage } from "react-native";
// import DocumentPicker from "react-native-document-picker";
import styles from "./style";
import { getData, getDecodedToken } from '../utils/locaStorage';
import { baseURL, ngoProfile, userProfile, updateNGO } from '../../constants/apiRoutes';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  state = {
    userType: "",
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
    },
    decodedID: "",
    headerToken: ""
  };

  static navigationOptions = {
    title: "Profile"
  };

  apiCallGet = async (url, token) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    return res.json();
  };

  callUpdateAPI = async (url, token, data) => {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  componentDidMount = async () => {
    const token = await getData("token");
    if (typeof token === "undefined") {
      alert("Please sign in first");
      this.props.navigation.navigate("Login");
    } else {
      const decodedtOken = getDecodedToken(token);
      this.setState({
        userType: decodedtOken.UserTypeId === 4 ? "NGO" : "user",
        decodedID: decodedtOken.id,
        headerToken: token
      });
      if (this.state.userType === "NGO") {
        const apiRes = await this.apiCallGet(
          baseURL + ngoProfile + this.state.decodedID,
          token
        );
        this.setState({
          personalDetailNGO: {
            AuthorityName: apiRes.data.userDetails.AuthorityName,
            Phone1: apiRes.data.userDetails.Phone1,
            Phone2: apiRes.data.userDetails.Phone2,
            Phone3: apiRes.data.userDetails.Phone3
          },
          Email_ID: apiRes.data.userDetails.Email,
          AddressDetails: {
            houseNo_BuildingName:
              apiRes.data.addressDetails.HouseBuilding === null
                ? "NULL"
                : apiRes.data.addressDetails.HouseBuilding,
            FullAddress:
              apiRes.data.addressDetails.AddressLine1 === null
                ? "NULL"
                : apiRes.data.addressDetails.AddressLine1 +
                apiRes.data.addressDetails.AddressLine2,
            city:
              apiRes.data.addressDetails.City === null
                ? "NULL"
                : apiRes.data.addressDetails.City,
            pincode:
              apiRes.data.addressDetails.PinCode === null
                ? "NULL"
                : apiRes.data.addressDetails.PinCode
          }
        });
      } else {
        const apiRes = await this.apiCallGet(
          baseURL + userProfile + this.state.decodedID,
          token
        );
        this.setState({
          personalDetailsUser: {
            FullName:
              apiRes.data.userDetails.FirstName +
              " " +
              apiRes.data.userDetails.MiddleName +
              " " +
              apiRes.data.userDetails.LastName,
            Gender: apiRes.data.userDetails.Gender,
            D_O_B: apiRes.data.userDetails.DOB.trim(10),
            Phone: apiRes.data.userDetails.Phone
          },
          Email_ID: apiRes.data.userDetails.Email,
          AddressDetails: {
            houseNo_BuildingName:
              apiRes.data.addressDetails.HouseBuilding === null
                ? "NULL"
                : apiRes.data.addressDetails.HouseBuilding,
            FullAddress:
              apiRes.data.addressDetails.AddressLine1 === null
                ? "NULL"
                : apiRes.data.addressDetails.AddressLine1 +
                apiRes.data.addressDetails.AddressLine2,
            city:
              apiRes.data.addressDetails.City === null
                ? "NULL"
                : apiRes.data.addressDetails.City,
            pincode:
              apiRes.data.addressDetails.PinCode === null
                ? "NULL"
                : apiRes.data.addressDetails.PinCode
          }
        });
      }
    }
  };

  onRefresh = async () => {
    const token = await getData("token");
    // console.log(token);
    if (typeof token === "undefined") {
      alert("Please sign in first");
      this.props.navigation.navigate("Login");
    } else {
      const decodedtOken = getDecodedToken(token);
      // console.log(decodedtOken);
      this.setState({
        userType: decodedtOken.UserTypeId === 4 ? "NGO" : "user",
        decodedID: decodedtOken.id,
        headerToken: token
      });
      if (this.state.userType === "NGO") {
        const apiRes = await this.apiCallGet(
          baseURL + ngoProfile + this.state.decodedID,
          token
        );
        //  console.log("res",apiRes)
        this.setState({
          personalDetailNGO: {
            AuthorityName: apiRes.data.userDetails.AuthorityName,
            Phone1: apiRes.data.userDetails.Phone1,
            Phone2: apiRes.data.userDetails.Phone2,
            Phone3: apiRes.data.userDetails.Phone3
          },
          Email_ID: apiRes.data.userDetails.Email,
          AddressDetails: {
            houseNo_BuildingName:
              apiRes.data.addressDetails.HouseBuilding === null
                ? "NULL"
                : apiRes.data.addressDetails.HouseBuilding,
            FullAddress:
              apiRes.data.addressDetails.AddressLine1 === null
                ? "NULL"
                : apiRes.data.addressDetails.AddressLine1 +
                  apiRes.data.addressDetails.AddressLine2,
            city:
              apiRes.data.addressDetails.City === null
                ? "NULL"
                : apiRes.data.addressDetails.City,
            pincode:
              apiRes.data.addressDetails.PinCode === null
                ? "NULL"
                : apiRes.data.addressDetails.PinCode
          }
        });
      } else {
        const apiRes = await this.apiCallGet(
          baseURL + userProfile + this.state.decodedID,
          token
        );
        // console.log(apiRes);
        this.setState({
          personalDetailsUser: {
            FullName:
              apiRes.data.userDetails.FirstName +
              " " +
              apiRes.data.userDetails.MiddleName +
              " " +
              apiRes.data.userDetails.LastName,
            Gender: apiRes.data.userDetails.Gender,
            D_O_B: apiRes.data.userDetails.DOB.trim(10),
            Phone: apiRes.data.userDetails.Phone
          },
          Email_ID: apiRes.data.userDetails.Email,
          AddressDetails: {
            houseNo_BuildingName:
              apiRes.data.addressDetails.HouseBuilding === null
                ? "NULL"
                : apiRes.data.addressDetails.HouseBuilding,
            FullAddress:
              apiRes.data.addressDetails.AddressLine1 === null
                ? "NULL"
                : apiRes.data.addressDetails.AddressLine1 +
                  apiRes.data.addressDetails.AddressLine2,
            city:
              apiRes.data.addressDetails.City === null
                ? "NULL"
                : apiRes.data.addressDetails.City,
            pincode:
              apiRes.data.addressDetails.PinCode === null
                ? "NULL"
                : apiRes.data.addressDetails.PinCode
          }
        });
      }
    }
  };

  onSignOut = async () => {
    await AsyncStorage.removeItem("token");
    this.props.navigation.navigate("Main");
  };

  updatePersonalDetail = async () => {
    // if(this.state.userType === 'NGO'){
    //   let dataToupdateNgo = {
    //     AuthorityName: this.state.personalDetailNGO.AuthorityName,
    //     Phone1: this.state.personalDetailNGO.Phone1,
    //     Phone2: this.state.personalDetailNGO.Phone2,
    //     Phone3: this.state.personalDetailNGO.Phone3,
    //     Email_ID: this.state.Email_ID
    //   }
    //     let apiUpdatedRes =  await this.callUpdateAPI(baseURL+updateNGO+this.state.decodedID, this.state.headerToken, dataToupdateNgo );
    // }
  };

  render() {
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
                  })
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
              <TouchableOpacity onPress={() => { this.updatePersonalDetail() }}>
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
              <TouchableOpacity onPress={() => { this.updatePersonalDetail() }}>
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
        <TouchableOpacity
          onPress={() => {
            this.onSignOut();
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ padding: 10, fontSize: 20, color: "red" }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};

export default ProfileScreen;
