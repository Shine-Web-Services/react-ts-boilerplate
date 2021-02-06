//Custom
export const CUSTOM = 'custom';

//App flow
export const URL_SPLITTER = '/';
export const POSITIVLY_LOGIN = '/login';
export const POSITIVLY_REGISTER = '/register';
export const POSITIVLY_FORGOT_PWD = '/forgotpassword';
export const POSITIVLY_RESET_PWD = '/resetpassword';
export const POSITIVLY_HOME = '/home';
export const POSITIVLY_ADMIN_USER = '/user';
export const POSITIVLY_DASHBOARD = '/dashboard';
export const POSITIVLY_LEADS = '/leads';
export const POSITIVLY_ADMIN_GLOBAL_SETTINGS = '/globalsetting';
export const POSITIVLY_PORTFOLIOS = '/portfolios';
export const POSITIVLY_WIDGET_REGISTRATION = '/registerwidget';
export const POSITIVLY_PROFILE_PDF = '/profilepdf';
export const POSITIVLY_RESPONSE_PDF = '/responsepdf';
export const POSITIVLY_PROPOSAL_PDF = '/proposalpdf';
export const POSITIVLY_ENHANCED_PROPOSAL_PDF = '/enhancedproposalpdf';
export const CUSTOM_WIDGET = '/customWidget';

//Plans
export const PLAN_FREE = 'FREE';
export const GENERAL_USER = 'GeneralUser';
export const ADMIN_USER = 'AdminUser';

//Advisor States
export const CLIENT_ADDED = 'ADDED';
export const CLIENT_INVITED = 'INVITED';
export const CLIENT_PROFILED = 'PROFILED';
export const CLIENT_FINALIZED = 'FINALIZED';
export const CLIENT_DESIGNED = 'DESIGNED';
export const CLIENT_TRADED = 'TRADED';

//Advisor Dashboard Constants
export const DASHBOARD_INVITE = 'INVITE';
export const DASHBOARD_PROFILE = 'PROFILE';
export const DASHBOARD_DESIGN = 'INVEST';
export const DASHBOARD_PROPOSAL = 'PROPOSAL';
export const DASHBOARD_TRADE = 'TRADE';

//Survey Types
export const SURVEY_TYPE_LONG = 1;
export const SURVEY_TYPE_SHORT = 7;

//Client Survey Status
export const SURVEY_OPEN = 'OPEN';
export const SURVEY_PARTIAL = 'PARTIAL';
export const SURVEY_COMPLETE = 'COMPLETE';
export const PORTFOLIO_PENDING = 'PART2PENDING';
export const PERSNOLITY_COMPLETED = 'PART1COMPLETED';
export const SURVEY_PORTFOLIO_INITIATED = 'PORTFOLIO_INITIATED';

//Advisor Dashboard Title
export const TITLE_DASHBOARD_INVITE = 'Invite';
export const TITLE_DASHBOARD_PROFILE = 'Personality';
export const TITLE_DASHBOARD_DESIGN = 'Portfolio';
export const TITLE_DASHBOARD_PROPOSAL = 'Proposal';
export const TITLE_DASHBOARD_TRADE = 'Trade';

//Advisor Design Page Constants
export const DESIGN_DESIGN = 'DESIGN';
export const DESIGN_ENHANCE = 'ENHANCE';
export const DESIGN_SUMMARY = 'SUMMARY';
export const DESIGN_EDIT = 'EDIT';
export const DESIGN_CORE = 'CORE';
export const DESIGN_SATELLITE = 'SATELLITE';
export const DESIGN_OPTIMIZE = 'OPTIMIZE';
export const DESIGN_CORE_BASIC = 'CORE_BASIC';
export const DESIGN_CORE_CUSTOM = 'CORE_CUSTOM';
export const DESIGN_SATELLITE_BASIC = 'SATELLITE_BASIC';
export const DESIGN_SATELLITE_CUSTOM = 'SATELLITE_CUSTOM';
export const DESIGN_ENHANCE_OPEN = 'ENHANCE_OPEN';
export const DESIGN_ENHANCE_FINALIZED = 'ENHANCE_FINALIZED';
export const DESIGN_CORE_ENABLED = 'enabled';
export const DESIGN_CORE_DISABLED = 'disabled';
export const DESIGN_CORE_RECOMMENDED = 'recommended';
export const DESIGN_CUSTOM_CORE = 'custom';

//Crm Systems
export const CRM_HUBSPOT = 'HUBSPOT';

export const POSITIVLY_JWT = 'positivly-token';

//Portfolio Period Options
export const PORTFOLIO_PERIOD_ONE_YEAR = 'LAST1YEAR';
export const PORTFOLIO_PERIOD_THREE_YEAR = 'LAST3YEAR';

//Image Bucket URL Prefix
export const IMAGE_PREFIX_CATEGORY = 'https://assets.positivly.com/category/';
export const IMAGE_PREFIX_FUND = 'https://assets.positivly.com/funds/';

//Proposal Portfolio Types
export const PROPOSAL_PORTFOLIO_TYPE_ENHANCED = 'ENHANCED';
export const PROPOSAL_PORTFOLIO_TYPE_DESIGNED = 'DESIGNED';
export const PROPOSAL_PORTFOLIO_TYPE_PERSONALITY_RESULTS = 'Personality Results';
export const PROPOSAL_PORTFOLIO_TYPE_PERSONALITY_IDEAS = 'Personality + Ideas';

//Satellite Manager Filters
export const SATELLITE_FILTER_ALL = 'ALL';
export const SATELLITE_FILTER_PURPOSE = 'P';
export const SATELLITE_FILTER_SECURITY = 'S';
export const SATELLITE_FILTER_TOUCH = 'T';
export const SATELLITE_FILTER_VISION = 'V';
export const SATELLITE_FILTER_DROPPED = 'DROPPED';

//Image Upload Types
export const IMAGE_TYPE_PROFILE = 'PROFILE';
export const IMAGE_TYPE_COMPANY = 'COMPANY';

//Preview Type
export const EMAIL_PREVIEW_INVITE = 'INVITE';
export const EMAIL_PREVIEW_PROFILE = 'PROFILE';
export const EMAIL_PREVIEW_PROPOSAL = 'PROPOSAL';
export const EMAIL_PREVIEW_SETTING = 'PREVIEW INVITE SETTING';
export const SINGLE_INVITE_OPTION = 'Invite Settings';
export const MULTIPLE_INVITE_OPTION = 'Test Settings';

//API Response Errors
export const AUTH_INVALID_CREDENTIALS = 'Invalid Credentials';
export const INVITE_ALREADY_INVITED = 'CLIENT_ALREADY_INVITED';
export const INVITE_ALREADY_PROFILED = 'CLIENT_ALREADY_PROFILED';

//Proposal Sections
export const PROPOSAL_SUMMARY = 'SUMMARY';
export const PROPOSAL_PROFILE = 'PROFILE';
export const PROPOSAL_PERFORMANCE = 'PERFORMANCE';
export const PROPOSAL_CONCLUSION = 'CONCLUSION';
export const PROPOSAL_HOLDINGS = 'HOLDINGS';
export const PROPOSAL_RISK_HOLDINGS = 'RISK_HOLDINGS';
export const PROPOSAL_SETTINGS = 'SETTINGS';
export const CURRENT_PROPOSAL_PERFORMANCE = 'CURRENT_PERFORMANCE';

//Allocations
export const CORE_ALLOCATIONS = { Conservative: '40/60', Moderate: '60/40', Growth: '80/20' };
export const CORE_ALLOCATIONS_CONSERVATIVE_HIGH = 'Conservative++';
export const CORE_ALLOCATIONS_CONSERVATIVE_MEDIUM = 'Conservative+';
export const CORE_ALLOCATIONS_CONSERVATIVE = 'Conservative';
export const CORE_ALLOCATIONS_MODERATE = 'Moderate';
export const CORE_ALLOCATIONS_GROWTH = 'Growth';
export const CORE_ALLOCATIONS_GROWTH_HIGH = 'Growth+';
export const CORE_ALLOCATIONS_CONSERVATIVE_HIGH_VAL = '10/90';
export const CORE_ALLOCATIONS_CONSERVATIVE_MEDIUM_VAL = '30/70';
export const CORE_ALLOCATIONS_CONSERVATIVE_VAL = '40/60';
export const CORE_ALLOCATIONS_MODERATE_VAL = '60/40';
export const CORE_ALLOCATIONS_GROWTH_VAL = '80/20';
export const CORE_ALLOCATIONS_GROWTH_HIGH_VAL = '100/0';

// Defined Satellite Upload

export const INVALID_SATELLITE = 'INVALID SATELLITE';
export const INVALID_TICKER = 'INVALID TICKER';
export const NONE = 'NONE';
