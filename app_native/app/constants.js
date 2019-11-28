import {Platform} from 'react-native'

//Aysnc Storage Keys
export const TOKEN = 'TOKEN';
export const HOLIDAY = 'HOLIDAYS';
export const LEAVE_REQUEST = 'LEAVE_REQUEST';
export const EMPLOYEE_GET = 'EMPLOYEE';
export const GET_APPROVALS = 'GET_APPROVALS';
export const GET_BALANCE = 'GET_BALANCE';
export const GET_LEAVE_TYPES = 'GET_LEAVES';
export const FILTER_TEXT = 'filterText'
export const FILTER_VALUE = 'filterValue'


//Redux keys
export const TRY_AUTH = 'TRY_AUTH';
export const AUTH_SET_TOKEN = "AUTH_SET_TOKEN";
export const UI_START_LOADING = 'UI_START_LOADING';
export const UI_STOP_LOADING = 'UI_STOP_LOADING';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const APPROVAL_LIST = 'APPROVAL_LIST';
export const SEARCH_VALUE = 'SEARCH_VALUE';
export const PULL_TO_REFRESH = 'PULL_TO_REFRESH';


//API END POINTS
export const LOGIN_URL = '/connect/token';
export const CHANGE_PASSWORD_URL = '/api/account/changepassword';
export const VIEW_LEAVE_REQUEST = '/api/leaverequests';
export const REJECT_LEAVE_REQUEST = '/api/LeaveRequests/reject';
export const DASHBOARD_VIEW_URL = '/api/leaves/dashboard';
export const UPDATE_EMPLOYEE_DETAILS = '/api/employee';
export const UPDATE_CONTACT_DETAILS = '/api/employee/contactdetails';
export const UPDATE_ADDITONAL_DETAILS = '/api/employee/additionaldetails';
export const LEAVE_BALANCE_URL = "/api/leaves/entitlements";
export const LEAVE_APPROVAL='/api/leaverequests/approvals';
export const BASE_URL_PROFILE_IMAGE = '/profile/images/';
export const APPROVE_LEAVE_REQUEST_URL = '/api/leaverequests/approve';
export const EMPLOYEE_GET_URL = '/api/Employee';


//other constants
const iOS = Platform.OS === 'ios'
export const COMPONENT_ID = 'COMPONENT_ID';

export const THEMES = {
    HRMSDefault: {
      name: 'HRMS default theme',
      colors: {
        brand: '#E20354',
  
        sidebarBackground: '#383435',
  
        primaryButton: '#46bc99',
        secondaryButton: '#d6d6d6',
  
        green: '#1dce73',
        orange: '#ea9448',
        yellow: '#f1c40f',
        blue: '#3498db',
        red: '#e74c3c',
        purple: '#935991',
  
        mention: '#e67e22',
        unReadBackground: 'rgba(213,245,226,.8)',
  
        mainFont: '#333',
        secondaryFont: '#777',
        whiteFont: 'white',
        link: '#3498db',
        blockquoteBorder: '#eee',
  
        codeInlineBorder: 'rgba(192,201,200,.4)',
        codeInlineBackground: 'rgba(192,201,200,.2',
  
        darkRed: '#b70345',
        raspberry: '#E20354',
        white: '#ffffff',
        gray: '#E0E0E0',
        dark: '#424242',
  
        androidGray: '#f0eef0'
      }
    }
  }

export const OLD_ANDROID_VERSIONS = ['4.4.4', '4.4.3', '4.4.2', '4.4.1', '4.4', '4.3.1', '4.3', '4.2.2', '4.2.1', '4.2', '4.1.2']

export const icons = {
  'menu': {icon: 'menu', color: 'black', size: 24},
  'menu-white': {icon: 'menu', color: 'white', size: 24},
  'search': {icon: 'search', color: 'black', size: 24},
  'search-white': {icon: 'search', color: 'white', size: 24},
  'more-vert': {icon: 'more-vert', color: 'white', size: 24},
  'info-outline': {icon: 'info-outline', color: 'white', size: 24},
  'back': {icon: iOS ? 'chevron-left' : 'arrow-back', color: 'white', size: 24},
  'forward': iOS ? {icon: 'chevron-right', color: 'white', size: 40} : {icon: 'arrow-forward', color: 'white', size: 24},
  'expand-more': {icon: 'expand-more', color: 'white', size: 24},
  'checkmark': {icon: 'check', color: 'white', size: 24},
  'browser': {icon: 'open-in-browser', color: 'white', size: 24},
  'closeIcon': {icon: 'close', color: 'white', size: 24}
}

  
