*** Settings ***
Library  SeleniumLibrary
Variables  ../Yaml files/Sample.yaml


*** Keywords ***

Google Fiddling.
    Log To Console  Step #1: I am in the google home page right now.
    Set Selenium Implicit Wait  60s
    Wait Until Page Contains Element  xpath=${Search_input}  30s
    Input Text  xpath=${Search_input}  Snowfall
    Log To Console  Step #2: Typing Snowfall in the search bar.
    Press Keys  xpath=${Search_Button}  ENTER
    Wait Until Page Contains Element  xpath=${Search_Result}  30s