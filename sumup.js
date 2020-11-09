console.log('Clicked.')
{
    class helper {
        regex
        #meffod

        minutesFor(estimate) {
            return this.#meffod(estimate)
        }

        constructor(regex, meffod) {
            this.regex = regex
            this.#meffod = meffod
        }
    }

    let regex1h12m = new RegExp(/([0-9]+)h([0-9]{1,2})m$/)
    let regexFloatH = new RegExp(/([0-9]*[,.][0-9]{1,2})h$/)
    let regexIntH = new RegExp(/([0-9]+)h$/)
    let regexIntM = new RegExp(/([0-9]+)m$/)
    let regexes = [
        new helper(regex1h12m, (estimate) => {
            let matches = regex1h12m.exec(estimate)
            return parseInt(matches[1]) * 60 + parseInt(matches[2])
        }),
        new helper(regexFloatH, (estimate) => {
            matches = regexFloatH.exec(estimate)
            return parseFloat(matches[1].replace(',', '.')) * 60
        }),
        new helper(regexIntH, (estimate) => {
            matches = regexIntH.exec(estimate)
            return parseInt(matches[1]) * 60
        }),
        new helper(regexIntM, (estimate) => {
            matches = regexIntM.exec(estimate)
            return parseInt(matches[1])
        }),
    ]
    let mce_edit_area = document.getElementsByClassName('mce-edit-area')[0];
    if (mce_edit_area == null) {
        console.log("mce_edit_area not found.")
    } else {
        let iframe = mce_edit_area.firstChild
        let innerDoc = iframe.contentDocument
        let tinyMce = innerDoc.getElementById('tinymce');

        if (tinyMce == null) {
            console.log("tinyMce not found.")
        } else {
            let response = ''
            let estimateInM = 0
            let nodes = tinyMce.childNodes;
            if (nodes == null) {
                console.log('No child nodes - hence no estimates.')
            } else {
                Array.from(nodes).forEach((item) => {
                    let est = 0
                    regexes.some((helper) => {
                        if (helper.regex.exec(item.textContent)) {
                            est = helper.minutesFor(item.textContent)
                            response += item.textContent + ": " + est + 'm\n'
                            console.log(item.textContent + ": " + est)
                            return true
                        }
                    })
                    if (est > 0) {
                        estimateInM += est
                    }
                })
                console.log('Total: ' + estimateInM + 'm')
                if (confirm(response + '----------------\nTotal: ' + estimateInM + 'm (' + (estimateInM / 60).toFixed(2) + 'h)')) {
                    estimateField = document.getElementById('timetracking_originalestimate')
                    if (estimateField == null) {
                        console.log("Estimate field not found.")
                    } else {
                        estimateField.value = estimateInM + 'm'
                    }
                }
            }
        }
    }
}