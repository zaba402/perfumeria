package pl.edu.uwm.wmii.web.rest.util;

import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.ConfigurableMapper;
import org.springframework.stereotype.Component;
import pl.edu.uwm.wmii.domain.AdresOB;
import pl.edu.uwm.wmii.domain.PracownikOB;
import pl.edu.uwm.wmii.domain.UmowaOB;
import pl.edu.uwm.wmii.web.rest.dto.AdresDTO;
import pl.edu.uwm.wmii.web.rest.dto.PracownikDTO;
import pl.edu.uwm.wmii.web.rest.dto.UmowaDTO;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Component
public class OrikaBeanMapper extends ConfigurableMapper {
    @Override
    protected void configure(MapperFactory factory) {
        factory.classMap(PracownikOB.class,PracownikDTO.class).byDefault().register();
        factory.classMap(UmowaOB.class,UmowaDTO.class).byDefault().register();
        factory.classMap(AdresOB.class,AdresDTO.class).byDefault().register();
    }
}
