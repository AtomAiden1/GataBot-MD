let handler = async (m, { command, usedPrefix, text }) => { 
let pre = `╭━━〔 *⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼 | 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 ⁉️* 〕━⬣  
𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼
${text}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 | 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 
${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}
╰━━━〔 𓃠 *${vs}* 〕━━━⬣`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🔮', `${usedPrefix + command}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
