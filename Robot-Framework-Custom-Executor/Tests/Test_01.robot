*** Settings ***
Library    SeleniumLibrary
Library    OperatingSystem
Resource    ../Method/Sample_Method.robot

*** Test Cases ***

Open Google Chrome and Search for Snowfall.
    [Tags]    Snowfall-search
    [Documentation]    To Open the Google homepage in browser, search for snowfall.
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call method    ${chrome_options}    add_argument    --no-sandbox
    Call method    ${chrome_options}    add_argument    --disable-extensions
    Call method    ${chrome_options}    add_argument    --headless
    Call method    ${chrome_options}    add_argument    --disable-gpu
    ${ws}=    Set Variable    window-size=1920,1000
    Call method    ${chrome_options}    add_argument    ${ws}

    Open Browser    https://www.google.com/    chrome    options=${chrome_options}
    Google Fiddling.