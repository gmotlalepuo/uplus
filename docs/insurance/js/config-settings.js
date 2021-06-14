window.settings = {
  i18n: {
    defaultlocale: 'en',
    /* Set to 'browser' to use browser locale */
    languages: ['en'],
    showLangSwitch: false,
    /* set to true to show the language switcher */
  },
  general: {
    theming: {
      override: false,
      interactiveColor: '#0076DE',
      brandColor: '#3C8712',
    },
    ga: {
      enabled: true,
      trackingid: 'G-RJ6VT2L72P',
    },
    connection: {
      type: 'mashup',
      authtype: 'basic',
      clientid: '',
      clientsecret: '',
      webportal: '',
    },
    auth_2fa: {
      enabled: false,
      sendMode: 'email',
      url: '',
      emailSettings: {
        correspondenceName: 'pyDefaultOTPCorr',
        emailAccount: 'Default',
        subject: 'New OTP Request',
        validateMaxAge: 'false',
      },
      smsSettings: {
        from: 'Pega',
        account: 'Default',
        message: 'Uplus OTP login code',
        validateMaxAge: 'false',
      },
    },
  },
  quicklinks: [
    {
      title: {
        en: 'Add Driver',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-Auto-AddDriver',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-car-solid',
      extraparam: 'PolicyID=PA1411133384',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Auto Accident',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-FNOL-Auto-Pers',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-car-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Change Address',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-ChangeAddress',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-home-alt-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Change Beneficiary',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-Life-ChangeBeneficiary',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-life-ring-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Make Payment',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaCPMI-Work-Service-MakePayment',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-life-ring-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Policy Loan',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-Life-PolicyLoan',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-life-ring-solid',
      extraparam: 'PolicyID=LF1446571166',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Report a Death Claim',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-FNOL-Life',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-life-ring-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },

    {
      title: {
        en: 'Surrender Policy',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-Life-PolicySurrender',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-life-ring-solid',
      extraparam: 'PolicyID=LF1446571166',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Travel Quote',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-MicroIns-Travel',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-plane-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
    {
      title: {
        en: 'Update Billing',
      },
      action: 'createNewWork',
      actionparam: '',
      objclass: 'PegaIns-Serv-Work-UpdateBillingFrequency',
      url: '',
      startcase: 'pyStartCase',
      application: 'CSISelfService',
      icon: 'pi-home-alt-solid',
      extraparam: '',
      hide: false,
      channelid: '',
      tenantid: '',
      dataretained: true,
      hideusers: '',
    },
  ],
  billpay: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebillpay: false,
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  banner: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hidebanner: true,
    hidebanner_button: false,
    color: '#CE9840',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  todo: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    hideactivity: false,
    hideaccount: false,
    hideKPI: true,
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  kmhelp: {
    action: 'display',
    actionparam: 'KMHelpSitePortal',
    objclass: 'Data-Portal',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    extraparam: '',
    username: '',
    password: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  homeheroaction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  offeraction: {
    action: 'createNewWork',
    actionparam: '',
    objclass: '',
    url: '',
    startcase: 'pyStartCase',
    application: '',
    pega_userid: '',
    pega_pwd: '',
    extraparam: '',
    channelid: '',
    tenantid: '',
    dataretained: true,
  },
  users: [
    {
      username: 'JimJohnson@pegatsdemo.com',
      password: 'rules',
      img: 'avatar-1.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: 'CONT-29',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'jim.johnson9870@gmail.com',
      pega_pwd: 'install12345!',
      bill_pay: 164.8,
      load_by_default: false,
      otp_send_to: '',
    },
    {
      username: 'MaryJohnson07@pegatsdemo.com',
      password: 'rules',
      img: 'avatar-maryjohnson.jpg',
      company_name: '',
      name: '',
      accountID: '',
      contactID: 'CONT-28',
      customerID: '',
      extraparam: '',
      dmm_context_data: '',
      pega_userid: 'mary.johnson1812@gmail.com',
      pega_pwd: 'install12345!',
      bill_pay: 164.8,
      load_by_default: true,
      otp_send_to: '',
    },
  ],
  pega_chat: {
    WCBConfigName: '',
    WebChatBotID: '',
    ApplicationName: '',
    MashupURL: '',
    ShowAsButton: true,
    EnableProActiveNotification: false,
    ResetLogout: false,
    ProActiveNotificationDismissTime: '',
    CoBrowseServerURL: '',
    CoBrowseToken: '',
    UseLegacyWebChat: false,
    DMMURL: '',
    DMMID: 'pega-wm-chat',
    DMMSecret: '',
    DMMPrivateURL: 'https://ksxyk0i2hb.execute-api.us-east-1.amazonaws.com/Prod/private-data',
  },
  pega_marketing: {
    Host: '',
    Port: '',
    channel: 'Web',
    requestTimeout: 10000,
    replaceHomePageHeader: false,
    showAIOverlay: false,
    enableRTS: false,
    enableClickStream: false,
    useCaptureByChannel: true,
    apiLevel: 'V2',
    contextName: 'Customer',
    showLoadingIndicator: false,
    homePage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
    },
    accountPage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
    },
    phonePage: {
      containerName: 'TopOffers',
      placement: 'Tile',
      clickaction: 'Mashup',
    },
    offerPage: {
      containerName: 'TopOffers',
      placement: 'Hero,Tile,Tile,Tile',
      clickaction: 'Mashup',
    },
  },
};
