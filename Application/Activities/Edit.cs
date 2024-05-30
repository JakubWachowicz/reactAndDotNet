using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command:IRequest{
            public Activity Activity{get;set;}
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly IMapper mapper;

            public Handler(DataContext context,IMapper mapper)
            {
                Context = context;
                this.mapper = mapper;
            }
 
            public DataContext Context { get; }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await Context.Activities.FindAsync(request.Activity.Id);
                mapper.Map(request.Activity, activity); 
                await Context.SaveChangesAsync();
            }
        }
    }
}