module.exports = {
    name : 'door6',
    description : 'Done Commands',
    execute(message, args , Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('ใ๐ใWorld : **KRNSTORE**')
        .setDescription('ใ๐ใPassword : **SUKA06**')
        .addFields (
            {name : "๐ฎ๐ฉ", value : `Silahkan di kirim screenshot di <#${message.channel.id}>`},
            {name : "๐ฌ๐ง", value : `Send screenshot in <#${message.channel.id}>`}
        )
        .setFooter('ใ๐ฎใKRN STORE ADMIN');
            
            if(message.member.roles.cache.has('965238378989781034')) {
                message.channel.send(newEmbed1);
                message.delete();
            } else {
                message.channel.send('ใโใ Anda tidak mempunyai Role yang dibutuhkan.');
            }
       
        /*message.author.send("hello");/*
         /* message.channel.send(`Hello ${message.author.toString()}, and welcome!`);*/


    }



}