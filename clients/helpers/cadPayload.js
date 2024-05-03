export const PremierOne = {
    "ext-doc-idtl:incidentdetail": {
      "Id": {
        "xmlns:ext-doc-idtl": "http://leitsc-lib/2.0/1.2/doc/IncidentDetail",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
        "xmlns:ext-cfs": "http://leitsc-lib/2.0",
        "xmlns:ext-doc-cfs": "http://leitsc-lib/2.0/doc/DetailedCFSInformation",
        "xmlns:j": "http://niem.gov/niem/domains/jxdm/4.0",
        "xmlns:scr": "http://niem.gov/niem/domains/screening/2.0",
        "xmlns:nc": "http://niem.gov/niem/niem-core/2.0",
        "xmlns:s": "http://niem.gov/niem/structures/2.0",
        "xmlns:intel": "http://niem.gov/niem/domains/intelligence/2.0",
        "xmlns:emgcymgmt": "http://niem.gov/niem/domains/emergencyManagement/2.0",
        "xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/",
        "xmlns:ext-doc-ntfi": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/Notification",
        "xmlns:ext-ntfi": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/Notification",
        "xmlns:ext-doc-uon": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/UnitOnDuty",
        "xmlns:ext-uon": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/UnitOnDuty",
        "xmlns:ext-doc-usu": "http://leitsc-lib/2.0/1.0/doc/UnitStatusUpdate",
        "xmlns:ext-usu": "http://leitsc-lib/2.0/UnitStatusUpdate",
        "xmlns:ext-doc-uuf": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/UnitOffDuty",
        "xmlns:ext-uuf": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/UnitOffDuty",
        "xmlns:ext-umu-doc": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/UnitMoveUp",
        "xmlns:ext-umu": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/UnitMoveUp",
        "xmlns:ext-doc-r2i2": "http://leitsc-lib/2.0/1.2/doc/RequestForResource",
        "xmlns:ext-r2i2": "http://leitsc-lib/2.0/RequestForResource",
        "xmlns:p": "http://niem.gov/niem/proxy/xsd/2.0",
        "xmlns:usps": "http://niem.gov/niem/usps_states/2.0",
        "xmlns:ext-idtl": "http://leitsc-lib/2.0/IncidentDetail",
        "xmlns:ext-doc-refrsp": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/RefreshResponse",
        "xmlns:ext-refrsp": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/RefreshResponse",
        "xmlns:ext-doc-av": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/1.0/doc/AddressVerification",
        "xmlns:ext-av": "http://motorolasolutions.com/PremierOne/CadToCad/2.0/AddressVerification"
      },
      "ext-idtl:payload": {
        "ext-idtl:action": "CREATE",
        "ext-idtl:incident": {
          "ext-idtl:servicecall": {
            "nc:activityidentification": {
              "nc:identificationid": "${INCIDENT_ID}",
              "nc:externalidentificationid": ""
            },
            "nc:activitydescriptiontext": "01 - AUTOTEST",
            "nc:activitystatus": {
              "nc:statustext": "Pending",
              "nc:statusdate": {
                "nc:datetime": "2022-01-19T10:36:02-05:00"
              },
              "nc:statusdescriptiontext": ""
            },
            "nc:activityreasontext": "",
            "j:servicecallmechanismtext": "PHONE",
            "ext-idtl:servicecallaugmentation": {
              "ext-idtl:calltypetext": "36",
              "ext-idtl:callprioritytext": "1",
              "ext-idtl:comment": {
                "nc:commenttext": "Test description ${__time()}",
                "ext-idtl:commentdatetime": {
                  "nc:datetime": "2022-01-19T10:36:02-05:00"
                },
                "nc:sourceidtext": "D65CB838-8E03-410F-8BD6-168EEA4A4B38",
                "nc:organizationidentification": {
                  "nc:identificationid": ""
                },
                "j:servicecalloperator": {
                  "nc:personotheridentification": {
                    "nc:identificationid": "5990"
                  }
                },
                "ext-idtl:terminalid": {
                  "nc:identificationid": ""
                }
              },
              "nc:contactradiochanneltext": "UNKNOWN",
              "ext-idtl:callopendate": {
                "nc:datetime": "2022-01-19T10:34:26.313-05:00"
              }
            },
            "ext-idtl:servicecallresponselocation": {
              "nc:locationaddress": {
                "nc:structuredaddress": {
                  "nc:locationstreet": {
                    "nc:streetname": "2520 LAKE WORTH RD"
                  },
                  "nc:locationcityname": "UNINCORPORATED",
                  "nc:locationstateuspostalservicecode": "",
                  "nc:locationpostalcode": "33461"
                }
              },
              "nc:locationcategorytext": "",
              "nc:locationlocale": "",
              "nc:locationname": "JOHN PRINCE PARK",
              "nc:locationsurroundingareadescriptiontext": "JOHN PRINCE PARK",
              "nc:locationtwodimensionalgeographiccoordinate": {
                "nc:geographiccoordinatelatitude": {
                  "nc:latitudedegreevalue": "25.764534674"
                },
                "nc:geographiccoordinatelongitude": {
                  "nc:longitudedegreevalue": "-80.512567644"
                }
              },
              "nc:locationutmcoordinate": {
                "nc:utmdatumid": "WGS84"
              },
              "ext-idtl:servicecallresponselocationaugmentation": {
                "ext-idtl:locationcrossstreet": "",
                "ext-idtl:area": "D1",
                "ext-idtl:sector": "D1S3",
                "ext-idtl:beat": "1-32"
              }
            }
          },
          "ext-idtl:servicecalloriginator": {
            "nc:personeyecolorcode": "",
            "nc:personhaircolorcode": "",
            "nc:personname": {
              "nc:persongivenname": "JOHN",
              "nc:personmiddlename": "",
              "nc:personsurname": "DOE"
            },
            "nc:personracecode": "",
            "nc:personsexcode": "",
            "ext-idtl:servicecalloriginatoraugmentation": {
              "ext-idtl:callertype": "INITIAL CALLER",
              "ext-idtl:personbuildcode": "",
              "ext-idtl:driverslicense": {
                "ext-idtl:driverslicenseno": "",
                "ext-idtl:driverslicensestate": ""
              },
              "ext-idtl:contact": "",
              "nc:contacttelephonenumber": {
                "nc:nanptelephonenumber": {
                  "nc:telephoneareacodeid": "987",
                  "nc:telephoneexchangeid": "6543210",
                  "nc:telephonesuffixid": ""
                }
              }
            }
          }
        }
      },
      "ext-idtl:exchangemetadata": {
        "ext-idtl:transactionmetadata": {
          "ext-idtl:metadataaugmentation": {
            "ext-idtl:terminalid": {
              "nc:identificationid": "CAD2"
            },
            "ext-idtl:submissiondatetime": {
              "nc:datetime": "2022-01-19T10:34:29.1422163-05:00"
            },
            "ext-idtl:messagesequencenumber": {
              "nc:identificationid": "06bcb4c8-565e-4431-ae73-146c582accdc"
            }
          }
        },
        "ext-idtl:datasubmittermetadata": {
          "intel:systemidentifier": {
            "nc:identificationid": "LoadTest"
          },
          "nc:organizationidentification": {
            "nc:identificationid": "${ORGANIZATION}"
          },
          "nc:organizationname": "${ORGANIZATION}"
        }
      }
    }
  }
  