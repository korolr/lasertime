import React, { PropTypes } from 'react'

function HeaderTitle(props) {
    return (
        <svg className="PageHeader__title" viewBox="0 0 217 39">
            <path d="M5.376 38.408c4.344 0 7.128-2.496 7.128-5.832 0-3.024-2.904-4.392-4.608-4.68-.048-.024-.048-.048 0-.072 1.464-.552 3.312-1.968 3.312-4.344 0-1.512-1.008-3.888-4.944-3.888-1.152 0-1.992.168-2.808.384-.504.12-.912.24-1.2.288-.192.048-.216.216-.216.48 0 .552.072 1.584.096 2.424 0 .264.096.336.168.336.12 0 .168-.072.192-.36.072-1.704.96-2.784 3.048-2.784 2.928 0 3.648 2.064 3.648 3.72 0 2.352-1.392 3.576-3.72 3.768-.576.072-.864.144-.864.288 0 .168.24.24.84.264 2.424.12 4.872 1.536 4.872 4.776 0 2.904-2.016 4.416-4.536 4.416-2.496 0-3.696-1.104-3.792-3-.024-.36-.072-.384-.168-.384-.096 0-.144.072-.192.336-.072.528-.144 1.656-.12 2.472.024.288.096.552.456.744.648.336 1.824.648 3.408.648zm15.096-10.872c-.072 0-.144-.024-.144-.144v-.504c0-3.744 0-4.416.048-5.184.048-.84.24-1.248.888-1.368.288-.048.432-.072.6-.072.096 0 .192-.048.192-.144 0-.144-.12-.192-.384-.192-.72 0-2.232.072-2.352.072-.12 0-1.632-.072-2.712-.072-.264 0-.384.048-.384.192 0 .096.096.144.192.144.216 0 .624.024.816.072.792.168.984.552 1.032 1.368.048.768.048 1.44.048 5.184v4.224c0 2.304 0 4.2-.12 5.208-.096.696-.216 1.224-.696 1.32-.216.048-.504.096-.72.096-.144 0-.192.072-.192.144 0 .144.12.192.384.192.72 0 2.232-.072 2.352-.072.12 0 1.632.072 2.952.072.264 0 .384-.072.384-.192 0-.072-.048-.144-.192-.144-.216 0-.744-.048-1.08-.096-.72-.096-.864-.624-.936-1.32-.12-1.008-.12-2.904-.12-5.208v-2.52c0-.12.072-.144.144-.144h10.176c.072 0 .144.048.144.144v2.52c0 2.304 0 4.2-.12 5.208-.096.696-.216 1.224-.696 1.32-.216.048-.504.096-.72.096-.144 0-.192.072-.192.144 0 .144.12.192.384.192.72 0 2.232-.072 2.352-.072.12 0 1.632.072 2.952.072.264 0 .384-.072.384-.192 0-.072-.048-.144-.192-.144-.216 0-.744-.048-1.08-.096-.72-.096-.864-.624-.936-1.32-.12-1.008-.12-2.904-.12-5.208v-4.224c0-3.744 0-4.416.048-5.184.048-.84.24-1.248.888-1.368.288-.048.432-.072.6-.072.096 0 .192-.048.192-.144 0-.144-.12-.192-.384-.192-.72 0-2.232.072-2.352.072-.12 0-1.632-.072-2.712-.072-.264 0-.384.048-.384.192 0 .096.096.144.192.144.216 0 .624.024.816.072.792.168.984.552 1.032 1.368.048.768.048 1.44.048 5.184v.504c0 .12-.072.144-.144.144H20.472zm26.856 3.456h-5.16c-.12 0-.192.072-.24.192l-1.44 4.248c-.216.6-.336 1.176-.336 1.608 0 .48.456.696.864.696h.216c.24 0 .312.048.312.144 0 .144-.216.192-.432.192-.576 0-1.536-.072-1.8-.072s-1.584.072-2.712.072c-.312 0-.456-.048-.456-.192 0-.096.12-.144.336-.144.168 0 .384-.024.576-.048 1.104-.144 1.584-1.056 2.016-2.256l5.448-14.904c.288-.792.384-.936.528-.936.144 0 .24.12.528.864.36.912 4.128 10.824 5.592 14.472.864 2.136 1.56 2.52 2.064 2.664.36.12.744.144.936.144.144 0 .264.024.264.144 0 .144-.216.192-.48.192-.36 0-2.112 0-3.768-.048-.456-.024-.72-.024-.72-.168 0-.096.072-.144.168-.168.144-.048.288-.264.144-.648l-2.232-5.904c-.048-.096-.096-.144-.216-.144zm-4.896-.864h4.584c.12 0 .12-.072.096-.168l-2.28-6.48c-.12-.36-.24-.36-.36 0l-2.112 6.48c-.048.12 0 .168.072.168zm17.136-3.24c0-3.744 0-4.416.048-5.184.048-.84.24-1.32.888-1.392.24-.024.264-.024.528-.048.216-.024.264-.072.264-.168 0-.12-.12-.168-.384-.168-.72 0-2.232.072-2.352.072-.12 0-1.728-.072-2.52-.072-.264 0-.384.048-.384.192 0 .096.072.144.264.144.168 0 .6.024.864.096.528.12.768.528.816 1.344.048.768.048 1.44.048 5.184v4.224c0 2.304 0 4.2-.12 5.208-.096.696-.24 1.248-.72 1.344-.216.048-.48.072-.624.072-.216 0-.264.096-.264.168 0 .144.12.168.384.168.72 0 2.136-.072 2.256-.072.12 0 1.632.072 2.952.072.264 0 .36-.048.36-.168 0-.072-.072-.168-.288-.168-.144 0-.624-.048-.96-.096-.72-.096-.864-.624-.936-1.32-.12-1.008-.12-2.904-.12-5.208V28.64c2.112 2.52 6.432 7.152 7.872 8.28 1.128.888 1.68 1.152 3.768 1.152h1.776c.264 0 .36-.048.36-.168 0-.12-.144-.168-.336-.168-.24 0-.48-.024-.696-.072-1.152-.216-1.992-.744-3.96-2.592-1.128-1.056-5.496-5.496-7.008-7.152.624-.696 3.36-3.408 5.472-5.448 1.44-1.392 1.896-1.68 2.496-1.92.336-.144.768-.24 1.224-.288.216-.024.264-.072.264-.168 0-.096-.072-.168-.408-.168-.384 0-1.8.072-2.544.072-.816 0-.744-.072-1.44-.072-.216 0-.36.048-.36.144 0 .096.048.144.216.216.192.072.312.264.312.456 0 .288-.096.528-1.536 2.016-1.464 1.512-4.728 4.944-5.472 5.664v-1.536zm26.352 0v1.536c.744-.72 4.008-4.152 5.472-5.664 1.44-1.488 1.536-1.728 1.536-2.016 0-.192-.12-.384-.312-.456-.168-.072-.216-.12-.216-.216s.144-.144.36-.144c.696 0 .624.072 1.44.072.744 0 2.16-.072 2.544-.072.336 0 .408.072.408.168 0 .096-.048.144-.264.168-.456.048-.888.144-1.224.288-.6.24-1.056.528-2.496 1.92-2.112 2.04-4.848 4.752-5.472 5.448 1.512 1.656 5.88 6.096 7.008 7.152 1.968 1.848 2.808 2.376 3.96 2.592.216.048.456.072.696.072.192 0 .336.048.336.168 0 .12-.096.168-.36.168H97.56c-2.088 0-2.64-.264-3.768-1.152-1.44-1.128-5.76-5.76-7.872-8.28v2.472c0 2.304 0 4.2.12 5.208.072.696.216 1.224.936 1.32.336.048.816.096.96.096.216 0 .288.096.288.168 0 .12-.096.168-.36.168-1.32 0-2.832-.072-2.952-.072-.12 0-1.536.072-2.256.072-.264 0-.384-.024-.384-.168 0-.072.048-.168.264-.168.144 0 .408-.024.624-.072.48-.096.624-.648.72-1.344.12-1.008.12-2.904.12-5.208v-4.224c0-3.744 0-4.416-.048-5.184-.048-.816-.288-1.224-.816-1.344-.264-.072-.696-.096-.864-.096-.192 0-.264-.048-.264-.144 0-.144.12-.192.384-.192.792 0 2.4.072 2.52.072.12 0 1.632-.072 2.352-.072.264 0 .384.048.384.168 0 .096-.048.144-.264.168-.264.024-.288.024-.528.048-.648.072-.84.552-.888 1.392-.048.768-.048 1.44-.048 5.184zm23.424 4.104h-5.16c-.12 0-.192.072-.24.192l-1.44 4.248c-.216.6-.336 1.176-.336 1.608 0 .48.456.696.864.696h.216c.24 0 .312.048.312.144 0 .144-.216.192-.432.192-.576 0-1.536-.072-1.8-.072s-1.584.072-2.712.072c-.312 0-.456-.048-.456-.192 0-.096.12-.144.336-.144.168 0 .384-.024.576-.048 1.104-.144 1.584-1.056 2.016-2.256l5.448-14.904c.288-.792.384-.936.528-.936.144 0 .24.12.528.864.36.912 4.128 10.824 5.592 14.472.864 2.136 1.56 2.52 2.064 2.664.36.12.744.144.936.144.144 0 .264.024.264.144 0 .144-.216.192-.48.192-.36 0-2.112 0-3.768-.048-.456-.024-.72-.024-.72-.168 0-.096.072-.144.168-.168.144-.048.288-.264.144-.648l-2.232-5.904c-.048-.096-.096-.144-.216-.144zm-4.896-.864h4.584c.12 0 .12-.072.096-.168l-2.28-6.48c-.12-.36-.24-.36-.36 0l-2.112 6.48c-.048.12 0 .168.072.168zm22.536-3.24v4.224c0 2.304 0 4.2.12 5.208.072.696.216 1.224.936 1.32.336.048.864.096 1.08.096.144 0 .192.072.192.144 0 .12-.12.192-.384.192-1.32 0-2.832-.072-2.952-.072-.12 0-1.632.072-2.352.072-.264 0-.384-.048-.384-.192 0-.072.048-.144.192-.144.216 0 .504-.048.72-.096.48-.096.6-.624.696-1.32.12-1.008.12-2.904.12-5.28v-2.112c-1.104.504-2.52.696-3.816.696-2.064 0-3.528-.552-4.464-1.656-.48-.576-1.008-1.392-1.008-3.744 0-1.032.024-1.848-.024-2.616-.048-.912-.216-1.2-.864-1.296-.24-.024-.36-.024-.624-.048-.288-.048-.288-.144-.288-.192 0-.12.168-.144.432-.144.888 0 1.968.072 2.304.072.36 0 1.848-.072 2.376-.072.288 0 .384.048.384.168 0 .048-.072.144-.408.168-.816.072-1.2.24-1.248 1.464-.024.84-.024 1.944-.024 2.832 0 2.808 1.632 4.104 4.176 4.104 1.008 0 2.16-.072 3.096-.48V26.48c0-3.432 0-4.008-.048-4.776-.048-.816-.24-1.2-1.032-1.368-.192-.048-.6-.072-.744-.072-.168 0-.264-.048-.264-.144 0-.144.12-.192.384-.192 1.08 0 2.592.072 2.712.072.12 0 1.632-.072 2.352-.072.264 0 .384.048.384.192 0 .096-.096.144-.192.144-.168 0-.312.024-.6.072-.648.12-.84.528-.888 1.368-.048.768-.048 1.44-.048 5.184zm8.328 4.224c0 2.136-.024 3.36-.048 4.296-.048 1.8-.36 2.136-.864 2.256-.168.048-.312.048-.552.072-.144.024-.264.072-.264.144 0 .144.12.192.384.192.624.024 1.2-.072 1.776-.072.936 0 2.04.048 3 .072.936.024 1.728.072 3.504.072.936 0 1.128 0 1.296-.624.12-.504.312-2.136.312-2.328 0-.168 0-.36-.144-.36-.12 0-.168.096-.216.36-.192 1.032-.456 1.536-1.224 1.776-.648.192-1.44.216-2.16.216-.936 0-1.584-.048-1.992-.216-.6-.24-.744-.768-.792-1.752-.024-.504 0-3.288 0-4.104V29c0-.096.048-.168.168-.168.408 0 2.784.048 3.432.12.864.096 1.152.432 1.248.792.072.216.096.456.096.672 0 .192.024.384.168.384.096 0 .144-.12.168-.36.024-.336.024-.888.096-1.632.072-.792.192-1.2.192-1.344 0-.144-.048-.192-.12-.192-.096 0-.168.096-.288.24-.24.288-.552.36-1.2.408-.552.048-3.504.048-3.816.048-.12 0-.144-.072-.144-.24v-6.624c0-.168.048-.24.144-.24.264 0 2.88.024 3.288.072 1.056.096 1.56.336 1.728.888.072.192.12.48.12.792 0 .192.048.312.192.312.096 0 .168-.168.192-.408.048-.624.072-1.08.096-1.44.048-.672.192-.96.192-1.128 0-.12-.024-.216-.096-.216-.072 0-.12.024-.264.096-.144.072-.576.12-1.104.144-.552.024-5.328.024-5.496.024-1.512-.072-2.16-.072-2.712-.072-.264 0-.384.048-.384.192 0 .096.144.12.312.144.216.024.528.024.696.072.792.168.984.552 1.032 1.368.048.768.048 1.44.048 5.184v4.224zm23.256 7.296c1.536 0 3.36-.168 4.32-.552.432-.192.48-.24.624-.696.24-.816.528-2.904.528-3.072 0-.192-.048-.36-.168-.36-.144 0-.192.096-.24.36-.072.432-.384 1.488-.888 2.016-.96.984-2.376 1.2-4.176 1.2-5.136 0-8.664-4.2-8.664-8.784 0-2.448.408-4.584 2.16-6.264.84-.816 2.328-1.752 5.52-1.752 2.112 0 3.96.648 4.8 1.368.624.528 1.008 1.512 1.008 2.448 0 .336.024.504.192.504.144 0 .192-.144.216-.504.024-.36.024-1.68.072-2.472.048-.864.12-1.152.12-1.344 0-.144-.048-.24-.216-.264-.888-.12-1.632-.192-2.544-.36-1.176-.216-2.52-.288-3.48-.288-3.696 0-5.88 1.128-7.32 2.568-2.136 2.136-2.688 4.944-2.688 6.552 0 2.28.576 5.016 2.904 7.104 1.896 1.704 4.32 2.592 7.92 2.592zm17.256-17.448c1.008.024 2.016.024 3.024.048 2.304.048 2.88.6 2.952 1.32 0 .096.024.168.024.264.024.336.072.408.192.408.096 0 .168-.096.168-.312 0-.264.072-1.92.072-2.64 0-.144 0-.288-.12-.288-.096 0-.312.072-.672.12-.384.072-.936.12-1.704.12h-9c-.288 0-1.2-.048-1.896-.12-.648-.048-.888-.288-1.056-.288-.096 0-.192.312-.24.456-.048.192-.528 2.256-.528 2.496 0 .144.048.216.12.216.096 0 .168-.048.24-.24.072-.168.144-.336.408-.744.384-.576.96-.744 2.448-.768 1.176-.024 2.376-.024 3.552-.048v10.152c0 2.304 0 4.2-.12 5.208-.096.696-.216 1.224-.696 1.32-.216.048-.504.096-.72.096-.144 0-.192.072-.192.144 0 .144.12.192.384.192.72 0 2.232-.072 2.352-.072.12 0 1.632.072 2.952.072.264 0 .384-.072.384-.192 0-.072-.048-.144-.192-.144-.216 0-.744-.048-1.08-.096-.72-.096-.864-.624-.936-1.32-.12-1.008-.12-2.904-.12-5.208V20.96zm11.208 10.152v-4.224c0-3.744 0-4.416-.048-5.184-.048-.816-.24-1.2-1.032-1.368-.192-.048-.6-.072-.696-.072-.216 0-.312-.048-.312-.144 0-.144.12-.192.384-.192 1.08 0 2.592.072 2.712.072.576 0 1.512-.072 2.616-.072 3.936 0 4.8 2.4 4.8 3.6 0 1.968-1.128 3.144-2.256 4.32 1.776.552 4.152 2.256 4.152 5.064 0 2.568-2.016 5.232-6.12 5.232-.264 0-1.032-.048-1.728-.072-.696-.048-1.368-.072-1.464-.072-.768 0-1.512.072-2.352.072-.264 0-.384-.048-.384-.168 0-.072.048-.168.36-.168.192 0 .36-.024.576-.072.48-.096.576-.648.672-1.344.12-1.008.12-2.904.12-5.208zm1.92-10.128v6.432c0 .168.048.216.168.264.144.024.576.096 1.464.096 1.344 0 1.68-.048 2.184-.624.504-.576.864-1.44.864-2.424 0-1.992-.888-4.128-3.24-4.128-.264 0-.768.024-1.152.12-.216.048-.288.12-.288.264zm0 7.608v1.368c0 1.848 0 4.824.024 5.184.072 1.176.072 1.512.816 1.872.648.312 1.68.36 2.112.36 1.296 0 3.384-.696 3.384-3.408 0-1.44-.48-3.528-2.328-4.8-.816-.552-1.416-.624-1.992-.696-.312-.048-1.512-.048-1.872-.048-.096 0-.144.048-.144.168zm21.024 2.4h-5.16c-.12 0-.192.072-.24.192l-1.44 4.248c-.216.6-.336 1.176-.336 1.608 0 .48.456.696.864.696h.216c.24 0 .312.048.312.144 0 .144-.216.192-.432.192-.576 0-1.536-.072-1.8-.072s-1.584.072-2.712.072c-.312 0-.456-.048-.456-.192 0-.096.12-.144.336-.144.168 0 .384-.024.576-.048 1.104-.144 1.584-1.056 2.016-2.256l5.448-14.904c.288-.792.384-.936.528-.936.144 0 .24.12.528.864.36.912 4.128 10.824 5.592 14.472.864 2.136 1.56 2.52 2.064 2.664.36.12.744.144.936.144.144 0 .264.024.264.144 0 .144-.216.192-.48.192-.36 0-2.112 0-3.768-.048-.456-.024-.72-.024-.72-.168 0-.096.072-.144.168-.168.144-.048.288-.264.144-.648l-2.232-5.904c-.048-.096-.096-.144-.216-.144zm-4.896-.864h4.584c.12 0 .12-.072.096-.168l-2.28-6.48c-.12-.36-.24-.36-.36 0l-2.112 6.48c-.048.12 0 .168.072.168zM39.316 11V1.088h1.008v4.214c.26 0 .51.01.75.028.237.02.473.042.706.07l3.766-4.312h1.106l-3.808 4.55c1.167.355 2.07.982 2.71 1.883.638.902 1.065 2.06 1.28 3.48h-1.106c-.15-.85-.362-1.58-.637-2.19-.274-.612-.63-1.112-1.063-1.5-.434-.386-.954-.67-1.56-.846-.608-.177-1.322-.257-2.143-.238V11h-1.008zm9.604 0h-1.106l4.284-9.912h.98L57.334 11h-1.12L52.56 2.348 48.92 11zm10.626-1.47l5.768-8.442h1.26V11h-1.008V2.474h-.028L59.77 11h-1.26V1.088h1.008V9.53h.028zm9.66-8.442h1.008v4.298h5.404V1.088h1.008V11h-1.008V6.31h-5.404V11h-1.008V1.088zM80.294 9.53l5.768-8.442h1.26V11h-1.008V2.474h-.028L80.518 11h-1.26V1.088h1.008V9.53h.028zm9.66 1.47V1.088h1.008v4.214c.26 0 .51.01.75.028.237.02.473.042.706.07l3.766-4.312h1.106l-3.808 4.55c1.167.355 2.07.982 2.71 1.883.638.902 1.065 2.06 1.28 3.48h-1.106c-.15-.85-.362-1.58-.637-2.19-.276-.612-.63-1.112-1.065-1.5-.434-.386-.954-.67-1.56-.846-.608-.177-1.322-.257-2.143-.238V11h-1.008zm9.604 0h-1.106l4.284-9.912h.98L107.972 11h-1.12l-1.092-2.604h-5.124L99.558 11zm1.456-3.528h4.368l-2.184-5.264-2.184 5.264zM112.928 11V1.088h1.008v4.214c.26 0 .51.01.75.028.237.02.473.042.706.07l3.766-4.312h1.106l-3.808 4.55c1.167.355 2.07.982 2.71 1.883.638.902 1.065 2.06 1.28 3.48h-1.106c-.15-.85-.362-1.58-.637-2.19-.275-.612-.63-1.112-1.064-1.5-.435-.386-.955-.67-1.562-.846-.607-.177-1.32-.257-2.142-.238V11h-1.008zm9.674-9.912h2.8c.504 0 .96.054 1.372.16.41.108.763.272 1.057.49.295.22.52.496.68.827.16.33.238.72.238 1.17 0 .447-.082.837-.245 1.168-.163.33-.392.607-.686.826-.294.218-.65.384-1.064.496-.415.112-.875.168-1.38.168h-1.763V11h-1.008V1.088zm1.008 4.452h1.708c.793 0 1.395-.154 1.806-.462.41-.308.616-.756.616-1.344 0-.616-.212-1.066-.637-1.35-.425-.286-1.02-.428-1.785-.428h-1.708V5.54zm7.042 5.46h-1.106l4.284-9.912h.98L139.066 11h-1.12l-1.092-2.604h-5.124L130.652 11zm1.456-3.528h4.368l-2.184-5.264-2.184 5.264zm16.758 1.932c-.168.252-.37.49-.61.714-.237.224-.512.42-.825.588-.312.168-.657.3-1.035.4-.378.097-.79.146-1.24.146-.746 0-1.436-.13-2.07-.392-.636-.26-1.182-.623-1.64-1.085-.456-.462-.813-1.01-1.07-1.645-.257-.635-.385-1.33-.385-2.086 0-.756.13-1.45.392-2.086.26-.635.623-1.183 1.085-1.645.462-.462 1.008-.824 1.638-1.085.63-.26 1.314-.392 2.05-.392.365 0 .722.037 1.072.112.35.075.68.18.987.315.308.135.588.3.84.49s.462.408.63.65l-.84.617c-.103-.16-.24-.317-.413-.476-.172-.16-.375-.3-.608-.42-.233-.12-.488-.22-.763-.294-.276-.075-.573-.112-.89-.112-.644 0-1.22.117-1.73.35-.508.233-.94.548-1.294.945-.355.397-.625.856-.812 1.38-.187.522-.28 1.072-.28 1.65 0 .58.096 1.13.287 1.653.192.523.465.982.82 1.38.355.396.786.71 1.295.944.51.233 1.08.35 1.715.35.57 0 1.11-.117 1.624-.35.513-.233.943-.607 1.288-1.12l.784.504zm11.536-3.36c0 .756-.13 1.45-.392 2.086-.26.635-.623 1.183-1.085 1.645-.462.462-1.008.824-1.638 1.085-.63.26-1.314.392-2.05.392-.738 0-1.422-.13-2.052-.392-.63-.26-1.176-.623-1.638-1.085-.462-.462-.824-1.01-1.085-1.645-.26-.635-.392-1.33-.392-2.086 0-.756.13-1.45.392-2.086.26-.635.623-1.183 1.085-1.645.462-.462 1.008-.824 1.638-1.085.63-.26 1.314-.392 2.05-.392.738 0 1.422.13 2.052.392.63.26 1.176.623 1.638 1.085.462.462.824 1.01 1.085 1.645.26.635.392 1.33.392 2.086zm-1.064 0c0-.58-.093-1.13-.28-1.652-.187-.523-.457-.982-.812-1.38-.355-.396-.786-.71-1.295-.944-.508-.233-1.08-.35-1.714-.35-.635 0-1.206.117-1.715.35-.508.233-.94.548-1.294.945-.355.397-.625.856-.812 1.38-.187.522-.28 1.072-.28 1.65 0 .58.093 1.13.28 1.653.187.523.457.98.812 1.372.355.392.786.705 1.295.938.51.233 1.08.35 1.716.35.635 0 1.206-.117 1.715-.35.51-.233.94-.546 1.296-.938.355-.392.625-.85.812-1.372.187-.523.28-1.073.28-1.652zM165.68 11h-1.008V1.984h-3.318v-.896h7.644v.896h-3.318V11zm5.81-9.912v4.046h1.736c.504 0 .96.075 1.372.224.41.15.763.36 1.057.63.294.27.52.593.68.966.158.373.237.784.237 1.232 0 .448-.082.845-.245 1.19-.163.345-.392.64-.686.882-.293.243-.648.427-1.063.553-.415.127-.875.19-1.38.19h-2.715V1.088h1.008zm0 9.016h1.652c.793 0 1.395-.16 1.806-.483.41-.32.616-.846.616-1.574 0-.616-.212-1.108-.637-1.477-.425-.37-1.02-.554-1.785-.554h-1.652v4.088zm7.112-9.016V11h-1.008V1.088h1.008z" />
        </svg>
    )
}

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
