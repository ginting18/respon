module.exports = {
    name : 'done',
    description : 'Done Commands',
    execute(message, args , Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('ใโใTransaction Completed')
        .addFields (
            {name : "ใ๐ฎ๐ฉใ", value : `Terimakasih sudah membeli di ${message.guild.name}\n Silahkan di tulis reps di <#959048732245123072>\nยปยปโโโโโโโโโโโโโโโโโโโโโยซยซ`},
            {name : "ใ๐ฌ๐งใ", value : `Thanks for buying in ${message.guild.name}\n Write down Reps in <#959048732245123072>\n `}
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